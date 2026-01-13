---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Πώς να φτιάξετε ένα σύστημα σχολίων όπως το Hackaday.com[/postlink]

{{#unless isPost}}
Εδώ θα εξερευνήσουμε τη δημιουργία ενός νήματος σχολίων που μοιάζει με αυτό της Hackaday.

Αν κάνετε κλικ στον σύνδεσμο για αυτή τη δημοσίευση, το γενικό στυλ της σελίδας καθώς και το FastComments Blog θα αλλάξουν.

{{/unless}}

{{#isPost}}
###### 24 Ιανουαρίου 2020
<div class="post-header">
    <div class="by left">από: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## ΟΥΑΟΥ ΤΙ ΣΥΝΕΒΗ;

Αυτή η ανάρτηση είναι μια επίδειξη της χρήσης του FastComments για να φτιάξετε ένα σύστημα σχολίων που μοιάζει με το https://hackaday.com.

Δεν σας προτείνουμε να τους αντιγράψετε. Αλλά αυτό δείχνει την ευελιξία του FastComments.

Για να κάνετε το FastComments να μοιάζει έτσι είναι απλό!
Δημιουργήσαμε ένα UI γι' αυτό! Για παράδειγμα, εδώ είναι η ρύθμιση που χρησιμοποιήσαμε για να κάνουμε το FastComments να ταιριάζει με αυτή τη σελίδα:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Ρυθμίσεις"
        class='lozad'
        height="850px" />
</div>

Αν θέλετε να το κάνετε στον κώδικα, είναι εξίσου εύκολο.

Πρέπει απλώς να ρυθμίσουμε μερικές επιλογές. Λοιπόν, επτά. Ορίστε το αποσπασμα κώδικα (παραλείπεται το custom CSS). Μόνο τόσα πολλά CSS μπορούν να εισαχθούν με αυτόν τον τρόπο. Σας προτείνουμε να χρησιμοποιήσετε
το παραπάνω UI για τον ορισμό του CSS. Θα το ελαχιστοποιήσει επίσης για εσάς, ενώ ο ορισμός της ιδιότητας customCSS δεν θα εφαρμόσει καμία βελτιστοποίηση ελαχιστοποίησης.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] ΣΚΕΨΕΙΣ ΣΤΟ "ΠΩΣ ΝΑ ΦΤΙΑΞΕΤΕ ΕΝΑ ΣΥΣΤΗΜΑ ΣΧΟΛΙΩΝ ΟΠΩΣ ΤΟ HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Σχόλια';
        },
        headerHTML: '<h1>Αφήστε μια απάντηση</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Έτσι, τι σημαίνουν όλα αυτά;
- commentCountFormat = Η μορφή του τίτλου πάνω από το νήμα σχολίων. "[count]" Αντικαθίσταται με τον πραγματικό τοπικοποιημένο αριθμό.
- commentCountUpdated = Μια συνάρτηση που καλείται όταν αλλάζει ο αριθμός σχολίων. Χρησιμοποιούμε αυτό για να ορίσουμε τον αριθμό σχολίων στην
κορυφή της σελίδας
- headerHTML = HTML που εμφανίζεται πάνω από το πλαίσιο "αφήστε μια απάντηση". Σε αυτή την περίπτωση το χρησιμοποιούμε για να εισάγουμε ένα στοιχείο τίτλου.
- hideAvatars = Το Hackaday δεν έχει avatar. Έτσι το ρυθμίζουμε σε true για να τα κρύψουμε.
- inputAfterComments = Μεταθέτει το πλαίσιο απάντησης στο κάτω μέρος της ροής σχολίων.
- absoluteDates = Αλλάζει τη διάρκεια ημερομηνίας από προεπιλογή (π.χ., "11 Λεπτά Πριν") σε απόλυτη ημερομηνία.
- customCSS = Προσαρμοσμένο στυλ

Όλες οι επιλογές ρύθμισης είναι τεκμηριωμένες <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">εδώ</a>.

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Σχόλια';
    };
</script>

{{/isPost}}

---
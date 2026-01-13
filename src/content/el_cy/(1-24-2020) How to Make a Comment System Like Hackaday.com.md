---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Πώς να δημιουργήσεις ένα σύστημα σχολίων όπως το Hackaday.com[/postlink]

{{#unless isPost}}
Εδώ θα εξερευνήσουμε τη δημιουργία μιας ακολουθίας σχολίων που μοιάζει με αυτήν του Hackaday.

Αν κάνεις κλικ στον σύνδεσμο αυτού του άρθρου, το συνολικό στυλ της σελίδας καθώς και το Blog του FastComments θα αλλάξει.

{{/unless}}

{{#isPost}}
###### 24 Ιανουαρίου 2020
<div class="post-header">
    <div class="by left">από: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## ΟΥΑΟΥ, ΤΙ ΣΥΝΕΒΗ;

Αυτό το άρθρο είναι μια επίδειξη της χρήσης του FastComments για να δημιουργήσεις ένα σύστημα σχολίων που μοιάζει με το https://hackaday.com.

Δεν προτείνουμε να τους αντιγράψεις. Αλλά αυτό δείχνει την ευελιξία του FastComments.

Η δημιουργία του FastComments να φαίνεται έτσι είναι απλή!
Δημιουργήσαμε ένα UI γι' αυτό! Για παράδειγμα, εδώ είναι η ρύθμιση που χρησιμοποιήσαμε για να κάνουμε το FastComments να ταιριάζει σε αυτή τη σελίδα:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Settings"
        class='lozad'
        height="850px" />
</div>

Αν θέλεις να το κάνεις μέσω κώδικα, είναι εξίσου εύκολο.

Απλά πρέπει να ρυθμίσουμε μερικές επιλογές. Ε, επτά. Να πώς είναι το απόσπασμα κώδικα (παραλείπεται το custom CSS). Μόνο τόσες πολλές CSS μπορεί να εισαχθούν με αυτόν τον τρόπο. Σου προτείνουμε να χρησιμοποιήσεις
το παραπάνω UI για να ορίσεις CSS. Θα το μειώσει και για σένα, ενώ ορίζοντας την ιδιότητα customCSS δεν θα εφαρμόσει βελτιστοποιήσεις μείωσης.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] ΣΚΕΨΕΙΣ ΓΙΑ "ΠΩΣ ΝΑ ΔΗΜΙΟΥΡΓΗΣΕΙΣ ΕΝΑ ΣΥΣΤΗΜΑ ΣΧΟΛΙΩΝ ΟΠΩΣ ΤΟ HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Σχόλια';
        },
        headerHTML: '<h1>Άφησε μια Απάντηση</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Τι σημαίνει το καθένα από αυτά;
- commentCountFormat = Η μορφή του τίτλου πάνω από την ακολουθία σχολίων. "[count]" Αντικαθίσταται με τον πραγματικό τοπιοποιημένο αριθμό.
- commentCountUpdated = Μια συνάρτηση που καλείται όταν αλλάζει ο αριθμός των σχολίων. Χρησιμοποιούμε αυτό για να ορίσουμε τον αριθμό των σχολίων στην
κορυφή της σελίδας.
- headerHTML = HTML Που εμφανίζεται πάνω από το κουτί "άφησε μια απάντηση". Σε αυτή την περίπτωση το χρησιμοποιούμε για να εισάγουμε ένα στοιχείο τίτλου.
- hideAvatars = Το Hackaday δεν έχει avatars. Έτσι, το ορίζουμε σε true για να τα κρύψουμε.
- inputAfterComments = Μετακινεί το κουτί απάντησης στο κάτω μέρος της ροής σχολίων.
- absoluteDates = Αλλάζει την προεπιλεγμένη μορφή ημερομηνίας (δηλαδή, "11 Λεπτά Πριν") σε απόλυτη ημερομηνία.
- customCSS = Προσαρμοσμένο στυλ.

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
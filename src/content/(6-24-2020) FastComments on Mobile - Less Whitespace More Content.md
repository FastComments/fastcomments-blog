###### [postdate]
# [postlink]FastComments on Mobile - Less Whitespace More Content[/postlink]

{{#unless isPost}}
We've improved the readability and appearance of FastComments on mobile.
{{/unless}}

{{#isPost}}
#### The Problem

When we first released FastComments we wanted a slick design that worked well on mobile and on desktop browsers. However, as we added more features and saw users interact
with FastComments we realized that we were wasting screen real-estate on our mobile UI while trying to make it "pretty".

So we've come up with a compromise.

#### The Solution

Here you can see before, we did not use space very efficiently.

<div class="text-center">
    <img 
        data-src="images/mobile-v1.png"
        alt="Mobile Version Before"
        title="Mobile Version Before"
        class='lozad' />
</div>

Now, we have exchanged vertical screen space for horizontal screen space.

<div class="text-center">
    <img 
        data-src="images/mobile-v2.png"
        alt="Mobile Version After"
        title="Mobile Version After"
        class='lozad' />
</div>

    
#### Customization Rule Implications

We're aware that when we make styling changes to the public facing comment widget, we can break our customers' customizations. Don't worry, we have you covered and have
gone through everyone's custom widget styling to make sure it is not broken. However, if you are seeing issues then let us know.

#### Performance Implications

This change has increased the widget size by about 300 bytes, bringing it to a total of 10.1kb. As with all releases that increase the size of the widget we'll be looking
into ways to bring it back down.

Happy commenting!

{{/isPost}}

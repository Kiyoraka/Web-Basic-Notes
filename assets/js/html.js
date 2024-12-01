// html.js
const HTML_NOTES = {
    title: 'HTML (HyperText Markup Language)',
    sections: [
        {
            title: 'Introduction to HTML',
            content: `HTML is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags.
            
Key Points:
• HTML stands for HyperText Markup Language
• It is the basic building block of the Web
• Describes the structure of web pages
• Consists of a series of elements and tags`
        },
        {
            title: 'Basic Structure',
            content: `Every HTML document follows a basic structure:

<pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- Content goes here --&gt;
    &lt;/body&gt;
&lt;/html&gt;
</pre>

Essential Elements:
• &lt;!DOCTYPE html&gt; - Declares the document type
• &lt;html&gt; - Root element
• &lt;head&gt; - Contains metadata
• &lt;body&gt; - Contains visible content`
        },
        {
            title: 'Common HTML Elements',
            content: `Frequently used HTML elements:

Text Elements:
• <h1> to <h6> - Headings
• <p> - Paragraphs
• <span> - Inline container
• <div> - Block container

Links and Media:
• <a> - Hyperlinks
• <img> - Images
• <video> - Video content
• <audio> - Audio content

Lists:
• <ul> - Unordered list
• <ol> - Ordered list
• <li> - List item`
        },
        {
            title: 'Forms and Input',
            content: `HTML forms are used to collect user input:

<form action="/submit" method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">Submit</button>
</form>

Common Form Elements:
• <input> - Various input types
• <textarea> - Multiline text input
• <select> - Dropdown lists
• <button> - Clickable buttons`
        },
        {
            title: 'Semantic HTML',
            content: `Semantic elements clearly describe their meaning:

Important Semantic Elements:
• <header> - Page or section header
• <nav> - Navigation links
• <main> - Main content
• <article> - Independent content
• <section> - Thematic grouping
• <aside> - Sidebar content
• <footer> - Page or section footer

Benefits:
• Better accessibility
• Improved SEO
• Clearer code structure`
        }
    ]
};

// explicitly export
export default HTML_NOTES;
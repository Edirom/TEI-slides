# TEI-slides

TEI-slides is the endeavour to provide course material of the ViFE-environment to the public. To avoid too many different types of media and possibly problems of readability, the material should be presented with single source publishing by using [TEI](https://github.com/TEIC). With this, the content is media independent, the presenteation can be shown in a browser or can be transformed in different media forms like LaTeX documents, PDF pages etc. Beside textual content it will also be possible to insert videos, tutorials, exercises etc. 

## Content
In this repository you can find the files that are necessary to transform the TEI files. The TEI files of the course material are hosted in seperate repositories. 

## How does it work?

TEI-slides works with a combination of javaScript and stylesheets, wrapped in an HTML-file:
In combination with a bundle of css-stylesheets (reveal.css, CETEIcean.css and TEI-slides.css), 
TEI documents can easily be displayed in a web browser by using [CETEIcean](https://github.com/TEIC/CETEIcean/blob/master/README.md), so the use of an intermediary XSLT is not necessary. The [tei-slides.js](https://github.com/Edirom/TEI-slides/blob/master/tei-slides.js)-file contains behaviors to change and adjust the TEI strucutre-elements to the required strucutre of [reveal.js](https://github.com/hakimel/reveal.js/), that allows elegant browser presentations. In  tei-slides.js, you can insert the TEI-file you want to transform by ```teiFile = 'yourfile.xml';```  

## License
TEI-slides is licensed under the MIT-License

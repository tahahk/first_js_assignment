/*21. The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of
hello world in different languages)*/

var lang = prompt("Select a language code to see translation of 'Hello World' 'en' for English 'de' for Dutch & 'es' for Espanol ",'en')

if(lang=="en"){
    alert("Hello, World");
}

else if (lang=="es"){
    alert("Hola, Mundo")
}

else if (lang=="du"){
    alert("Hallo, Wereld")
}

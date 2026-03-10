# Web-DD_BT_Site

## BT Week 1

### Maandag 16 Februari
Ik heb vandaag een html structuur gemaakt van de eerste pagina van het formulier. Hiervoor heb ik geleerd om met fieldsets te werken en deze semantisch toe te passen. Ik focus me voor nu nog erg veel op de html structuur van het formulier, hier heb ik ook veel mdn gebruikt om in te lezen over de verschillende attribute van inputs en labels. Het maken van de juiste structuur duurde langen dan gedacht, morgen ga ik verder met de structuur van de tweede pagina en de eerste afmaken.

### Dinsdag 17 Februari
Ik heb vandaag de html toegevoegd van de eerste pagina die ik nog niet had. Dit duurde niet zo lang en was meer van hetzelfde. Wat wel lang duurde was het uploaden van mijn fonts. Ik wilde ervoor zorgen dat ze niet in mijn github stonden maar wel op mijn computer, hiervoor had ik .gitignore gebruikt waarin ik *.ttf had gezegd. Dit zorgde ervoor dat alle .ttf bestanden niet naar mijn github werden gestuurd. Waar ik tegenaan liep was dat ik de fonts had toegevoegd voordat ik gitignore had toegevoegd. Ik heb daarnaast de eerste styling van mijn css bestand toegevoegd, hierdoor lijkt het wat meer op de NS stijl, de workshop van Victor had hier veel bij geholpen.

## Week 2

### Maandag 2 Maart
In de ochtend heb ik een workshop gevolgd van Victor, hierin legde hij uit hoe je JavaScript kan toepassen om een validatie toe te passen op bijvoorbeeld text inputs. Dit heb ik later op de dag leren toepassen in mijn eigen site bij een text input. Hier krijg je een bericht als je niet het juiste aantal karakters hebt ingevuld, dit werkt helaas nog niet naar gewenst. In de middag heb ik er ook voor gezorgd om vragen weg te laten als deze niet van toepassing zijn. Dit heb ik volledig met css gedaan met een lange css selector. Hierin heb ik de opacity op 0 gezet, waardoor het weg gaat.

### Dinsdag 3 Maart
Om 9:30 hebben we in onze groepjes de onderwerpen besproken en uitgewerkt in codepen, ik had zelf het onderwerp type=radio. In codepen heb ik verschillende dingen uitgeprobeert: https://codepen.io/Jacco01/pen/ogzjrWy?editors=0100 Je kan hierbijvoorbeeld een keuze maken en JavaScript registreert die keuze zodra je op submit klikt. Ik had ook de radio button geprobeert na te maken met een select element, dit werkte beter dan gedaxcht, maar is uiteindelijk niet even handig als een radio input. 
Later op de dag heb ik aan mijn form gewerkt, ik heb ervoor gezorgd dat de verschillende onderdelen van het formulier op verschillende pagina's staan, hierdoor is het veel overzichtelijker en meer verdeelt. Diego had me veel geholpen met de JavaScript hiervoor, na wat uitleg snapte ik het wel redelijke en was het na wat trial en error gelukt. Aan het einde van de dag heb ik er ook voor gezorgd dat elke pagina eerst gevalideert zodra je op volgende klikt. Dit koste eigenlijk minder code dan ik zelf had gedacht, maar was ook veel vragen aan klasgenoten, ik had hier ook wat AI voor gebruikt om een beeld te vormen. 

Wat heb je vandaag gedaan?
Wat heb je geleerd?
Hoelang duurde dat?
Wat ga je volgende keer doen?

### Vrijdag 6 Maart
Vandaag ben ik nog tussen de gesprekken in even bezig geweest met mijn formulier. Ik heb ervoor gezorgd dat het formulier werkt als je js niet wilt laden, normaal zouden pagina's een hidden class hebben waardoor je niks zou zien zonder js. Door in html standaard de .active class mee te geven aan de pagina's zie je automatisch wel. Gelukkig werkt het nu ook nog als de js er wel bij zit. Het gesprek met mijn groepje ging heel goed ik veel duidelijke en nuttige feedback punten gekregen die nog volgende week ga verwerken:
- Zorg dat je nog een font vind die meer in de stijl is van NS.
- Zorg ervoor dat het werkt zonder JS.
- Het is handig als mensen hun voortgang kunnen zien in het formulier.


### Afronding week 2 BT
In deze week heb ik hele grote stappen gemaakt voor het vak BT. Ik heb ervoor gezorgd dat de verschillende onderdelen van het formulier op aparte pagina's staan en dit ook laten werken zonder js. Ik vind dat ik JavaScript al heel snel aan het leren ben, maar merk nog wel een beetje een achterstand in mijn kennis vergeleken met mijn klasgenoten. Ik denk dat ik volgende week verder ga met de styling van het formulier en ervoor zorg dat de onnodige radio vragen standaard uit staan en pas tevoorschijn komen als je op ja klikt bij relaterende vragen.


### Maandag 9 Maart
In de ochtend hadden we een introduct van Rijk van Zanten, hij is de oprichter van Directus. Het was heel interessant om te horen wat hij allemaal heeft gestudeert en welke ervaring hij heeft. Het gaf me ook wat inspiratie voor mijn afstudeer project die ik hierna moet maken.
Ik heb me vandaag verder gericht op het stylen van mijn formulier, het zag er nog heel goedkoop en druk uit. Dit kost mij allemaal veel langer dan gedacht, ik ben constant door de dag heen van gedachte veranderd en ben door verschillende styling versies heen gegaan. Ik ad bijvoorbeeld de keuze gemaakt om de achtergrond van het formulier geel te maken, dit leek mij achteraf veel te druk, waardoor ik toch voor een licht grijze achtergrond had gekozen. Ik heb vandaag geleerd om veel stapsgewijzer te werken en ervoor te zorgen dat je bijvoorbeeld een pattern helemaal afmaakt voordat je verder werkt, daarnaast ben ik veel met hetzelfde bezig geweest in css.
Morgen ga ik me nog op de laatste details richten en daarna ben ik van plan om ervoor te zorgen dat ik minimaal 2 patterns in mijn formulier heb staan.

Before:

<img width="1500" height="765" alt="Screenshot 2026-03-09 at 15 48 51" src="https://github.com/user-attachments/assets/da497952-5282-4ba7-bdf8-e7624625dde9" />


After:

<img width="999" height="772" alt="Screenshot 2026-03-09 at 15 49 02" src="https://github.com/user-attachments/assets/5ca258b7-21b4-48fb-b5a3-6b679db0b561" />



### Bronnen

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form - form examples


### Dinsdag 10 Maart
Ik de ochtend hebben we een weekly geek gehad over het artikel What happened to text inputs. Het artikel was over het algemeen wel interssant. Ik vond alleen dat er te veel pauzes in de video zat en misschien veel stukken in teksten onnodig waren om de boodschap over te brengen.

Ik ben verder veel met mijn project bezig geweest. Ik heb de knoppen aan de onderkant gestyled en ervoor gezorgd dat deze knoppen weg gaan op het moment dat javascript niet laadt, daarvoor in plaats komt een submit knop onderaan het formulier. Verder heb wat kleuren aangepast zodat het meer op de stijl van ns lijkt. Ik heb ook nog een pattern toegevoegd van vraag 2a, hier moet de gebruiker een van de 3 tekst velden invullen. Doormiddel van css krijgen de input een display none en weer display block op het moment dat iemand de aansluitende select option heeft gekozen. Ik heb me daarnaast nog een beetje gericht op de validatie van het formulier door bijvoorbeeld de bsn error beter te stijlen. 
Ik vind het jammer dat net wat minder creatief kunnen zijn dan bij het vak Css, ik moet me erg houden aan de stijl van de NS wat ik op veel momenten niet heel mooi vind.

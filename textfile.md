
#### For FWM - OWASP
[Read this article about OWASP](https://www.cloudflare.com/learning/security/threats/owasp-top-10/)

Give answers in swedish to the following questions in a text-file in your repo:

1. What is OWASP and what is its primary mission as described in the article?
Det är ett projekt för säkerhet inom öppna webbapplikationer med målet att erbjuda säkerhet för webbapplikationer utan vinstintresse.

1. Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.
Injection hänvisar till en typ av attacker där en angripare infogar skadlig data i ett programs inmatningar, ofta genom att utnyttja sårbarheter i otillräcklig validering. Inom säkerhetskontexter för webbapplikationer är en vanlig typ av injection SQL-injektion.

1. Explain two strategies to prevent Broken Authentication vulnerabilities.
De två försiktighetsåtgärderna är tvåfaktorsautentisering (2FA) och begränsning eller fördröjning av upprepade inloggningsförsök med hjälp av hastighetskontroll.

1. Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?
De främsta konsekvenserna av osäker deserialisering i webbapplikationer inkluderar:

Utförande av obehörig kod: Angripare kan utnyttja osäker deserialisering för att infoga och köra skadlig kod på servern, vilket ofta leder till obehörigt fjärrutförande.

Manipulering av data: Osäker deserialisering kan tillåta angripare att ändra deserialiserade data, vilket äventyrar dataintegriteten och potentiellt leder till felaktig eller korrumperad information.

Brott mot konfidentialitet: Om känsliga data deserialiseras osäkert kan angripare få åtkomst till konfidentiell information, vilket leder till integritetsintrång.

Tjänsteneutralisering (DoS): Osäker deserialisering kan exploateras för att förbruka systemresurser, vilket leder till en tjänsteneutralisering och gör applikationen otillgänglig.

Privilegiehöjning: Angripare kan försöka utnyttja osäker deserialisering för att få obehörig åtkomst till resurser eller begränsade funktioner, vilket leder till privilegiehöjning.

Utforskning av interna sårbarheter: Om osäker deserialisering tillåter utförande av godtycklig kod kan angripare utforska andra interna sårbarheter i systemet.

För att mildra dessa konsekvenser är det avgörande att utvecklare antar robusta säkerhetspraxis, såsom strikt validering av deserialiserade data, begränsning av privilegier och användning av säkra bibliotek. Dessutom är medvetenhet och kontinuerlig övervakning avgörande för att upptäcka och svara på potentiella attacker genom osäker deserialisering.

1. Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.
Det är en säkerhetsbrist i webbapplikationer som tillåter en angripare att injicera skadliga skript på sidor som visas för andra användare. De två metoderna för förebyggande är data validering och undanröjande, vilket innebär att strikta metoder för att validera användarinputs implementeras, och användningen av Content Security Policy (CSP), vilket innebär att en innehållssäkerhetspolicy implementeras för att specificera vilka källor för skript som betraktas som säkra.

#### For UXF - WCAG

[Do this tutorial](https://www.w3schools.com/accessibility/)

Give answers in swedish to the following questions in a text-file in your repo:

1. Explain the importance of semantic elements in web development according to accessibility guidelines. Provide examples of at least two semantic HTML elements and clarify how they enhance accessibility for users with disabilities.
Semantiska element spelar en avgörande roll i skapandet av tillgängliga webbsidor eftersom de ger mening och struktur åt innehållet, vilket underlättar förståelsen för användare, inklusive de med funktionsnedsättningar. Två exempel på semantiska HTML-element och hur de förbättrar tillgängligheten är:

<header> (rubrik):

Semantisk betydelse: Elementet <header> används för att representera rubriken för en sektion eller sida. Det ger viktig information om det följande innehållet, som titlar, logotyper och navigeringslänkar.
Förbättring av tillgänglighet: Genom att använda <header> på ett lämpligt sätt kan användare med funktionsnedsättningar tydligt förstå sidans struktur, särskilt när de navigerar genom den med skärmläsare. Innehållet i rubriken kan identifieras och läsas separat, vilket ger en mer begriplig upplevelse.
<nav> (navigering):

Semantisk betydelse: Elementet <nav> är avsett att representera navigeringssektionen på en sida. Det omfattar länkar till andra sidor eller sektioner av webbplatsen.

Förbättring av tillgänglighet: Genom att använda <nav> kan användare med funktionsnedsättningar hoppa direkt till navigeringssektionen, vilket sparar tid och underlättar lokaliseringen av viktiga länkar. Dessutom kan skärmläsare tydligt meddela att de befinner sig i navigeringsområdet, vilket ger en effektivare navigeringsupplevelse.

Genom att införliva semantiska element bidrar utvecklare inte bara till att göra koden mer strukturerad och läsbar för andra utvecklare, utan bidrar också betydligt till tillgängligheten genom att säkerställa en mer inkluderande och begriplig användarupplevelse för personer med funktionsnedsättningar.

2. Describe the significance of color contrast in web design concerning accessibility. How does adhering to color contrast guidelines benefit users with visual impairments, and what are the recommended contrast ratios as per WCAG standards?
Betydelsen av Färgkontrast:

Läsbarhet: Ett adekvat kontrastförhållande mellan text och bakgrund underlättar läsningen av innehållet och gör det mer läsbart för alla användare.
Tydlig åtskillnad mellan element: Tydliga kontraster hjälper till att särskilja olika element på sidan, vilket förbättrar förståelsen och navigeringen.
Fördelar för Användare med Synnedsättning:

Skärmläsare: Användare som förlitar sig på skärmläsare kan dra nytta av tydlig kontrast för att tolka och kommunicera innehållet på ett effektivt sätt.
Nedsatt syn: För personer med nedsatt syn underlättar adekvat kontrast identifiering och förståelse av innehållet, även under förhållanden med nedsatt synskärpa.
Rekommenderat Kontrastförhållande enligt WCAG-riktlinjerna:

Vanlig text: Ett minimikontrastförhållande på 4,5:1 mellan text och bakgrund rekommenderas för att säkerställa god läsbarhet.
Stor eller Fet text: För stor text (med en storlek motsvarande 18 punkter eller 14 punkter fetstil) är ett minimikontrastförhållande på 3:1 acceptabelt.

3. Discuss the role of alternative text (alt text) for images in accordance with accessibility guidelines. Why is it crucial to include descriptive alt text, and how does this contribute to making web content more accessible? Provide examples to illustrate your explanation.
Text alternativ (alt text) är en grundläggande komponent för att förbättra tillgängligheten för bilder på en webbsida enligt tillgänglighetsriktlinjer. Här är några exempel:

Beskrivning för skärmläsare:

Betydelse: Användare med synnedsättning förlitar sig på alt text för att förstå innehållet i bilder när de använder skärmläsare.
Exempel: För en bild av en hund kan alt text vara "En gyllene hund leker på en grön äng."
Kontextualisering av innehåll:

Betydelse: Alt text ger sammanhang om syftet och innehållet i bilden och gör det förståeligt även för användare som inte kan se bilden.
Exempel: För en bild av en notifieringsikon kan alt text vara "Ikonen för meddelanden visar en notifikation."
Effektiv navigering för icke-visuella enheter:

Betydelse: I textbaserade webbläsare, sökmotorer och andra icke-visuella enheter hjälper alt text till att identifiera och tolka bildinnehållet.
Exempel: För ett stapeldiagram som visar statistik kan alt text vara "Stapeldiagram som visar försäljningstillväxt över tid."
Efterlevnad av tillgänglighetsstandarder:

Betydelse: Att inkludera alt text överensstämmer med tillgänglighetsriktlinjer, såsom de som fastställts av WCAG, vilket främjar en mer inkluderande webbupplevelse.
Exempel: För en bild av en handlingsknapp kan alt text vara "Knapp 'Skicka' för att skicka formuläret."
Genom att införliva beskrivande alt text på ett adekvat sätt bidrar utvecklare signifikant till att göra webbinnehållet tillgängligt för en bredare användarskara, oavsett deras visuella förmågor. Denna praxis främjar en mer inkluderande och rättvis onlineupplevelse.

4. Explain the purpose of landmarks in creating accessible web content. How do landmarks aid in navigation for users of assistive technologies, and can you provide examples of commonly used landmark elements in HTML?
Syftet med Landmarks:
Landmarks (landmärken) är HTML-element som tillhandahåller semantiska etiketter för olika sektioner på en webbsida. Huvudsyftet med landmärken är att förbättra navigeringen och förståelsen av innehållet för användare av tekniska hjälpmedel, som skärmläsare. Dessa landmärken fungerar som strukturella referenspunkter och gör det möjligt för användare att enkelt navigera genom sidan.

Hur Landmärken Hjälper i Navigeringen:

Effektiv Navigering: Landmärken erbjuder en tydlig struktur för användare av tekniska hjälpmedel och möjliggör att de hoppar direkt till specifika sektioner på en sida.
Innehållsorientering: Genom att identifiera och märka viktiga sektioner hjälper landmärken användare att förstå organisationen och syftet med innehållet.
Exempel på Landmarkelement i HTML:

<header> (rubrik):

Exempel: <header role="banner">...</header>
Syfte: Representerar inledningen eller sidhuvudet på sidan.

<nav> (navigering):

Exempel: <nav role="navigation">...</nav>
Syfte: Anger navigeringssektionen på sidan.

<main> (huvudinnehåll):

Exempel: <main role="main">...</main>
Syfte: Representerar sidans huvudinnehåll.

<footer> (sidfot):

Exempel: <footer role="contentinfo">...</footer>
Syfte: Anger sidfoten och innehåller information som upphovsrätt eller kontaktlänkar.

<aside> (sidofält):

Exempel: <aside role="complementary">...</aside>
Syfte: Representerar en kompletterande sektion eller sidofält.

<section> (sektion):

Exempel: <section role="region">...</section>
Syfte: Definierar en generisk sektion på sidan.

Genom att använda dessa landmärkeselement på ett lämpligt sätt bidrar utvecklare till en mer effektiv och förståelig navigeringsupplevelse för användare av tekniska hjälpmedel och förbättrar därmed tillgängligheten för webbinnehållet.

5. Describe the significance of proper form labeling. Why is it important to label form elements, and what strategies can developers implement to ensure effective labeling for improved accessibility?
Korrekt märkning av formulärelement är avgörande för tillgänglighet och användbarhet på en webbsida. Det är väsentligt för att säkerställa att användare, särskilt de som förlitar sig på tekniska hjälpmedel, klart förstår syftet med varje formulärfält. Dessutom bidrar effektiv märkning till en mer intuitiv upplevelse för alla användare, oavsett deras förmågor.

Anledningar till Vikten:

Användare med Synnedsättning: För användare som använder skärmläsare är korrekt märkning nödvändig för att de ska veta vad varje fält representerar.
Effektiv Navigering: Tydliga etiketter hjälper alla användare att navigera genom formulär snabbare och mer exakt.
Undvikande av Förvirring: Tydlig märkning minskar risken för förvirring om varje fältets funktion, vilket förbättrar användarupplevelsen.
Strategier för Att Säkerställa Effektiv Märkning:

Användning av Attributen "for" och "id": Att associera etiketter med fält genom att använda attributen "for" och "id" i HTML underlättar korrekt koppling och förbättrar tillgängligheten.

<label for="namn">Namn:</label>
<input type="text" id="namn" name="namn">

Användning av Elementet <label>:
Användning av elementet <label> runt texten för etiketten är en rekommenderad praxis för att förbättra tillgängligheten.

<label>E-postadress:
  <input type="email" name="epost">
</label>

Användning av Attributet "aria-label": Attributet "aria-label" kan användas för att tillhandahålla en tillgänglig etikett när visuell etikett inte är möjlig eller olämplig.

<input type="text" aria-label="Telefonnummer">

Ytterligare Förklarande Text: Vid behov kan det vara fördelaktigt att lägga till ytterligare förklarande text nära fältet för att tillhandahålla extra information om fältets syfte.
Genom att implementera dessa strategier säkerställer utvecklare effektiv märkning av formulärelement, vilket främjar en mer inkluderande och tillgänglig användarupplevelse
# Aufgabe 2 - SSR mit SvelteKit

In dieser Aufgabe muss die Svelte-Anwendung nur mittels SSR implementiert werden. Die Anwendung ist im Ordner
Application. Zum Installieren der Anwendung `npm install` ausführen. Um die Anwendung zu starten muss `npm run dev`
ausgeführt werden. Die Anwendung starten auf [localhost:5173](http://localhost:5173).

Die nötigen Daten sind in der Datei `routes/cats/cats.ts` zu finden.


## A) Implementieren der Übersicht

Es soll eine Übersicht aller Bilder erstellt werden. Die Übersicht ist im Ordner `routes/cats` zu finden. Dabei müssen 
die folgenden Features implementiert werden:

- Anzeige des Titels
- Anzeige des Bildes
- Anzeige der abgebildeten Katzen
- Anzeige des Datums
- Pagination der Übersicht

## B) Implementieren der Detail-Ansicht

Die Detailansicht muss implementiert werden. Die Detailansicht ist im Ordner `routes/cats/[id]` zu finden. Es müssen 
folgende Features implementiert werden:

- Navigation aus der Übersicht in die Detailansicht
- Anzeige aller nötigen Daten
- Navigation aus der Detailansicht auf die vorherige Seite der Übersicht

## C) Implementieren der Suche

Der Benutzer soll nach den passenden Bildern Suchen können.

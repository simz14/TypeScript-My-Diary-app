/* 
V tejto ulohe si skusime spravit REAL-WORLD aplikaciu , ktoru si mozeme dat neskor na github ako svoj Mini-PROJEKT po uspesnom absolvovani foundation fazy.

Pojde totiž o aplikáciu ktoru som nazval My Diary(dennik) , nasa aplikacia umozni uzivatelovi pisat si dennik ulozit ho do databazy(ktora bude nas textovy file) a nasledne ked sa k nemu vrati tak si vytiahnut data z databazy(z textoveho suboru) na zaklade IDcka a prepisat si poznamky z daneho zaznamu alebo pridat si novu poznamku do dennika.

nas dennik bude obsahovat

Diary Class
    /Parametre/
        list - (array of objects(Records)) - zoznam vsetkych zapisov do dennika

    /Metody/
        load - nacitanie vsetkych zaznamov z Textoveho suboru do listu
        save - ulozenie existujucich zaznamov z listu do textoveho suboru
                |-> tieto 2 metody budu klucove k tomu aby sme sa vedeli k nasim datam dostat aj po vypnuti programu

        addRecord - ulozenie si zaznamu do dennika
        removeRecord - vymazanie zaznamu z dennika
        rewriteRecord - prepisanie daneho zaznamu v denniku (prepise poznamky z daneho zaznamu)
        getRecord - vrati dany zaznam z denniku na zaklade IDcka ktore tam vlozime ,OUTPUT bude vyzerat takto

        8---------------------------------------8
        | ID | 3                                |     
        |---------------------------------------|
        | 11.11.2022                            |
        |---------------------------------------|
        |  Najlepsi den zivota                  |
        |---------------------------------------|
        |   Tu pojde text blablabla blablabla   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        <3--------------------------------------<3


Record class
    /Parametre/
    ID(cislo zaznamu aby sme vedeli vyberat data podla niecoho ak ich chceme prepisat)  -–> 1
    Date (den vytvorenia - najdi si na googli laska JS get current day )
    title(nazov zaznamu "Uprsany Pondelok")
    notes(nejake poznamky nasho uzivatela napriklad "Dnes bol celkom v pohode den , mal som sa dobre , urobil som vsetko co som mal az na par veci 🙁")

    addNote() - urobi poznamku k danemu recordu do noveho riadku

FOLDER STRUCTURE

you will find tree of your structure here : https://www.figma.com/file/AoSaLosXdBKkAgKqtFl1or/Untitled?node-id=0%3A1
all custom code you will write will be in main.ts folder
v src foldri bude vsetko nakodene so strukturou , v Models zlozke budu vsetky classy , v zlozke utils budu exportovane vsetky pomocne funkcie napriklad v metode classy Record potrebujem pomocnu funkciu ktora mi vypocita sumu dvoch cisel function sum(a,b) , tak si spravim v utils file sum.ts a do neho si spravim tu funkciu a vyexportujem ju a potom ju importnem tam kde ju potrebujem a pouzijem ju atd. 🙂 (budes potrebovat pomocne funckie v getRecord aby nam vysla pekna tabulka ako sme to robili v jednej ulohe aby vypocitalo kolko medzier ma byt dalej tak tie tu mozes dat)

v zlozke data bude jeden alebo viac filov podla toho ake ssi budes ukladat a nacitavat a tam budu textove subory v ktorych budu zaznamy z dennika na FILEIO
     

JEST TESTING
- na konci otestovat v JESTE pre vsetky pripady ktore ta napadnu

GIT
-vytvorit git Repozitar (TypeScript-My-Diary-app)
-pushovat do gitu so zmysluplnymi komentarmi

CODE
-pisat pekny kod , ukladat do variables neprehladne veci
-pisat komentare k postupom kde sa co deje
-napisat Typescriptove interfaci k danym classam a implemntovat ich
*/

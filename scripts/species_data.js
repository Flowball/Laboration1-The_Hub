/** Data-object used as "products" for looping through items and displaying (see fish-button) */
const species = [
  {
    id: 0,
    speciesName: "Braxen",
    latinName: "Abramis brama",
    description:
      "Börjar i silver och slutar i brons; så kan man sammanfatta braxens färgskiftning från ung individ fram till en rejäl, vuxen fisk på över halvmetern. Arten finns över större delen av landet.",
    imgSource: "https://assets.artdatabanken.se/image/_5/9992_206118_5.jpg",
  },
  {
    id: 1,
    speciesName: "Bäckröding",
    latinName: "Salvelinus fontinalis",
    description:
      "En amerikansk röding som efter inplantering erövrat många svenska bäckar. Ryggen, ryggfenan och stjärtfenan har gott om ljusa prickar, men på resten av fisken är de fåtaliga eller saknas helt.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8133_206232_5.jpg",
  },
  {
    id: 2,
    speciesName: "Sutare",
    latinName: "Tinca tinca",
    description:
      "Med sina rundade fenor, sin nästan raka stjärtfenkant, sina små röda ögon och extremt små, knappt skönjbara fjäll kan sutare inte förväxlas med någon annan svensk karpfisk. Hal av slem är den också.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8058_206136_5.jpg",
  },
  {
    id: 3,
    speciesName: "Sarv",
    latinName: "Scardinius erythrophthalmus",
    description:
      "Sarv känns igen på den skimrande guldglansen längs kroppssidorna och de kraftigt röda fenorna. Från mört skiljer den sig dessutom genom en högre och mer robust kroppsbyggnad samt genom att ryggfenan är placerad längre bak.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8054_206134_5.jpg",
  },
  {
    id: 4,
    speciesName: "Asp",
    latinName: "Leuciscus aspius",
    description:
      "En stor och kraftig rovfisk som kännetecknas av det markanta underbettet och de spetsiga fenorna. Aspens lek på våren är spektakulär och lockar till sig åskådare. Den är en utpräglad rovfisk, vilket är unikt bland de svenska karpfiskarna.",
    imgSource: "https://assets.artdatabanken.se/image/_5/502_100013_5.jpg",
  },
  {
    id: 5,
    speciesName: "Ruda",
    latinName: "Carassius carassius",
    description:
      "En överlevare i syrefattiga vatten, och en art som kan variera mycket i utseende. Ruda liknar karp och silverruda med sin breda ryggfena men saknar karpens skäggtömmar, och ryggfenans ytterkant buktar utåt där silverrudans och karpens buktar inåt.",
    imgSource: "https://assets.artdatabanken.se/image/_5/9992_206118_5.jpg",
  },
  {
    id: 6,
    speciesName: "Färna",
    latinName: "Squalius cephalus",
    description:
      "Färna lever huvudsakligen i strömmande vatten. Dess breda nacke har gett den benämningen bredpannad id. Färna skiljs lättast från såväl id som andra svenska silvriga karpfiskar genom analfenans utbuktande ytterkant.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8055_102136_5.jpg",
  },
  {
    id: 7,
    speciesName: "Marulk",
    latinName: "Lophius piscatorius",
    description:
      "Man kan beskriva en marulk som en stor mun med ben och metspö. Den ligger stilla på bottnen och lockar till sig byten med sitt ”metspö”, dvs. den förlängda främre fenstrålen med sin förtjockning som liknar en liten agnfisk.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8192_206173_5.jpg",
  },
  {
    id: 8,
    speciesName: "Nissöga",
    latinName: "Cobitis taenia",
    description:
      "En relativt liten, snabb och ormlikt slingrande fisk med en skalpellartad tagg under ögat. Nissöga kan påträffas i dyiga bottnar i många vattendrag i södra Sverige och känns bland annat igen på raderna av svarta fläckar längs vardera kroppssidan.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8062_100036_5.jpg",
  },
  {
    id: 9,
    speciesName: "Lake",
    latinName: "Lota lota",
    description:
      "Den enda torskartade fisken i svenska sötvatten, där den skiljer sig från alla andra fiskarter genom att den har en enda skäggtöm mitt på hakan.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8167_206178_5.jpg",
  },
  {
    id: 10,
    speciesName: "Paddtorsk",
    latinName: "Raniceps raninus",
    description:
      "En liten svart eller mörkbrun torskfisk, som med sitt breda huvud och sin avsmalnande bakkropp liknar ett grodyngel. Paddtorsken för ett solitärt leverne på grunda, tångbevuxna bottnar.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8149_206221_5.jpg",
  },
  {
    id: 11,
    speciesName: "Torsk",
    latinName: "Gadus morhua",
    description:
      "Torsk känner man igen på den marmorerade färgteckningen, unik bland svenska torskfiskar. Det är en marin fiskart som också trivs i bräckt vatten.",
    imgSource: "https://assets.artdatabanken.se/image/_5/8174_206142_5.jpg",
  },
];

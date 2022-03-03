const nomi = ["reckless","rectangular","ready","real","realistic","reasonable","red","reflecting","regal","regular","reliable","relieved","remarkable","remorseful","remote","repentant","required","respectful","responsible","repulsive","revolving","rewarding","rich","rigid","right","ringed","ripe","roasted","robust","rosy","rotating","rotten","rough","round","rowdy","royal","rubbery","spectavid","voluminous","wan","warlike","warm","warmhearted","warped","wary","wasteful","watchful","waterlogged","watery","wavy","wealthy","weak","weary","webbed","wee","weekly","weepy","weighty","weird","welcome","well-documented","well-groomed","well-informed","well-lit","well-made","well-off","well-to-do","well-worn","wet","which","whimsical","whirlwind","whispered","white","whole","whopping","wicked","wide","wide-eyed","wiggly","wild","willing","wilted","winding","windy","winged","wiry","wise","witty","wobbly","woeful","wonderful","wooden","woozy","wordy","worldly","worn","worried","worrisome","worse","worst","worthless","worthwhile","worthy","wrathful","wretched","writhing","wrong","wry","yawning","yearly","yellow","yellowish","young","youthful","yummy","zany","zealous","zesty","zigzag","rocky"];

const cognomi = ["people","history","way","art","world","information","map","family","government","health","system","computer","meat","year","thanks","music","person","reading","method","data","food","understanding","theory","law","bird","literature","problem","software","control","knowledge","power","ability","economics","love","internet","television","science","library","nature","fact","product","idea","temperature","investment","area","society","activity","story","magazine","newspaper","relationship","teaching","cell","dealer","debate","finding","lake","member","message","phone","scene","appearance","association","concept","customer","death","discussion","housing","inflation","insurance","mood","woman","advice","blood","effort","expression","importance","opinion","payment","reality","responsibility","situation","skill","statement","wealth","application","city","county","depth"];

//correzione snack sulla base dello svolgimento appreso a lezione

//Creo un array vuoto che conterrà i nomi e i cognomi estratti della fake list di Gatsby
const fakeList = [];
//Avvio un ciclo di 10 per creare i nuovi 10 finti ospiti
for (let i=0; i<10; i++){
//Estraggo un nome a caso e un cognome a caso
    let randomName = Math.floor(Math.random() * nomi.length);
    let randomSurname = Math.floor(Math.random() * cognomi.length);
//Con la funzione toUpperCase imposto il primo carattere (0) del nome e del cognome in maiuscolo e con la funzione substring aggiungo i restanti caratteri (dall'1 in poi) del nome e del cognome.In questo modo il nome e cognome iniziano con una maiuscola.
    const selectedName = nomi[randomName][0].toUpperCase() + nomi[randomName].substring(1);
    const selectedSurname = cognomi[randomSurname][0].toUpperCase() + cognomi[randomSurname].substring(1);
//Popolo il nuovo array con il risultato delle estrtazioni
    const fakeGuest = selectedName + " " + selectedSurname;
    fakeList.push (fakeGuest);
}
//Stampo in console il nuovo array
console.log(fakeList);
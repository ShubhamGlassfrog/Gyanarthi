"use client"
import React, { useState } from 'react'
import axios from 'axios';



const Main = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [dob, setDob] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };

    // Define your states and corresponding cities here
    const stateCityMap = {
        "Andaman and Nicobar Islands": [
            "Port Blair"
        ],
        "Haryana": [
            "Faridabad",
            "Gurgaon",
            "Hisar",
            "Rohtak",
            "Panipat",
            "Karnal",
            "Sonipat",
            "Yamunanagar",
            "Panchkula",
            "Bhiwani",
            "Bahadurgarh",
            "Jind",
            "Sirsa",
            "Thanesar",
            "Kaithal",
            "Palwal",
            "Rewari",
            "Hansi",
            "Narnaul",
            "Fatehabad",
            "Gohana",
            "Tohana",
            "Narwana",
            "Mandi Dabwali",
            "Charkhi Dadri",
            "Shahbad",
            "Pehowa",
            "Samalkha",
            "Pinjore",
            "Ladwa",
            "Sohna",
            "Safidon",
            "Taraori",
            "Mahendragarh",
            "Ratia",
            "Rania",
            "Sarsod"
        ],
        "Tamil Nadu": [
            "Chennai",
            "Coimbatore",
            "Madurai",
            "Tiruchirappalli",
            "Salem",
            "Tirunelveli",
            "Tiruppur",
            "Ranipet",
            "Nagercoil",
            "Thanjavur",
            "Vellore",
            "Kancheepuram",
            "Erode",
            "Tiruvannamalai",
            "Pollachi",
            "Rajapalayam",
            "Sivakasi",
            "Pudukkottai",
            "Neyveli (TS)",
            "Nagapattinam",
            "Viluppuram",
            "Tiruchengode",
            "Vaniyambadi",
            "Theni Allinagaram",
            "Udhagamandalam",
            "Aruppukkottai",
            "Paramakudi",
            "Arakkonam",
            "Virudhachalam",
            "Srivilliputhur",
            "Tindivanam",
            "Virudhunagar",
            "Karur",
            "Valparai",
            "Sankarankovil",
            "Tenkasi",
            "Palani",
            "Pattukkottai",
            "Tirupathur",
            "Ramanathapuram",
            "Udumalaipettai",
            "Gobichettipalayam",
            "Thiruvarur",
            "Thiruvallur",
            "Panruti",
            "Namakkal",
            "Thirumangalam",
            "Vikramasingapuram",
            "Nellikuppam",
            "Rasipuram",
            "Tiruttani",
            "Nandivaram-Guduvancheri",
            "Periyakulam",
            "Pernampattu",
            "Vellakoil",
            "Sivaganga",
            "Vadalur",
            "Rameshwaram",
            "Tiruvethipuram",
            "Perambalur",
            "Usilampatti",
            "Vedaranyam",
            "Sathyamangalam",
            "Puliyankudi",
            "Nanjikottai",
            "Thuraiyur",
            "Sirkali",
            "Tiruchendur",
            "Periyasemur",
            "Sattur",
            "Vandavasi",
            "Tharamangalam",
            "Tirukkoyilur",
            "Oddanchatram",
            "Palladam",
            "Vadakkuvalliyur",
            "Tirukalukundram",
            "Uthamapalayam",
            "Surandai",
            "Sankari",
            "Shenkottai",
            "Vadipatti",
            "Sholingur",
            "Tirupathur",
            "Manachanallur",
            "Viswanatham",
            "Polur",
            "Panagudi",
            "Uthiramerur",
            "Thiruthuraipoondi",
            "Pallapatti",
            "Ponneri",
            "Lalgudi",
            "Natham",
            "Unnamalaikadai",
            "P.N.Patti",
            "Tharangambadi",
            "Tittakudi",
            "Pacode",
            "O' Valley",
            "Suriyampalayam",
            "Sholavandan",
            "Thammampatti",
            "Namagiripettai",
            "Peravurani",
            "Parangipettai",
            "Pudupattinam",
            "Pallikonda",
            "Sivagiri",
            "Punjaipugalur",
            "Padmanabhapuram",
            "Thirupuvanam"
        ],
        "Madhya Pradesh": [
            "Indore",
            "Bhopal",
            "Jabalpur",
            "Gwalior",
            "Ujjain",
            "Sagar",
            "Ratlam",
            "Satna",
            "Murwara (Katni)",
            "Morena",
            "Singrauli",
            "Rewa",
            "Vidisha",
            "Ganjbasoda",
            "Shivpuri",
            "Mandsaur",
            "Neemuch",
            "Nagda",
            "Itarsi",
            "Sarni",
            "Sehore",
            "Mhow Cantonment",
            "Seoni",
            "Balaghat",
            "Ashok Nagar",
            "Tikamgarh",
            "Shahdol",
            "Pithampur",
            "Alirajpur",
            "Mandla",
            "Sheopur",
            "Shajapur",
            "Panna",
            "Raghogarh-Vijaypur",
            "Sendhwa",
            "Sidhi",
            "Pipariya",
            "Shujalpur",
            "Sironj",
            "Pandhurna",
            "Nowgong",
            "Mandideep",
            "Sihora",
            "Raisen",
            "Lahar",
            "Maihar",
            "Sanawad",
            "Sabalgarh",
            "Umaria",
            "Porsa",
            "Narsinghgarh",
            "Malaj Khand",
            "Sarangpur",
            "Mundi",
            "Nepanagar",
            "Pasan",
            "Mahidpur",
            "Seoni-Malwa",
            "Rehli",
            "Manawar",
            "Rahatgarh",
            "Panagar",
            "Wara Seoni",
            "Tarana",
            "Sausar",
            "Rajgarh",
            "Niwari",
            "Mauganj",
            "Manasa",
            "Nainpur",
            "Prithvipur",
            "Sohagpur",
            "Nowrozabad (Khodargama)",
            "Shamgarh",
            "Maharajpur",
            "Multai",
            "Pali",
            "Pachore",
            "Rau",
            "Mhowgaon",
            "Vijaypur",
            "Narsinghgarh"
        ],
        "Jharkhand": [
            "Dhanbad",
            "Ranchi",
            "Jamshedpur",
            "Bokaro Steel City",
            "Deoghar",
            "Phusro",
            "Adityapur",
            "Hazaribag",
            "Giridih",
            "Ramgarh",
            "Jhumri Tilaiya",
            "Saunda",
            "Sahibganj",
            "Medininagar (Daltonganj)",
            "Chaibasa",
            "Chatra",
            "Gumia",
            "Dumka",
            "Madhupur",
            "Chirkunda",
            "Pakaur",
            "Simdega",
            "Musabani",
            "Mihijam",
            "Patratu",
            "Lohardaga",
            "Tenu dam-cum-Kathhara"
        ],
        "Mizoram": [
            "Aizawl",
            "Lunglei",
            "Saiha"
        ],
        "Nagaland": [
            "Dimapur",
            "Kohima",
            "Zunheboto",
            "Tuensang",
            "Wokha",
            "Mokokchung"
        ],
        "Himachal Pradesh": [
            "Shimla",
            "Mandi",
            "Solan",
            "Nahan",
            "Sundarnagar",
            "Palampur",
            "Kullu"
        ],
        "Tripura": [
            "Agartala",
            "Udaipur",
            "Dharmanagar",
            "Pratapgarh",
            "Kailasahar",
            "Belonia",
            "Khowai"
        ],
        "Andhra Pradesh": [
            "Visakhapatnam",
            "Vijayawada",
            "Guntur",
            "Nellore",
            "Kurnool",
            "Rajahmundry",
            "Kakinada",
            "Tirupati",
            "Anantapur",
            "Kadapa",
            "Vizianagaram",
            "Eluru",
            "Ongole",
            "Nandyal",
            "Machilipatnam",
            "Adoni",
            "Tenali",
            "Chittoor",
            "Hindupur",
            "Proddatur",
            "Bhimavaram",
            "Madanapalle",
            "Guntakal",
            "Dharmavaram",
            "Gudivada",
            "Srikakulam",
            "Narasaraopet",
            "Rajampet",
            "Tadpatri",
            "Tadepalligudem",
            "Chilakaluripet",
            "Yemmiganur",
            "Kadiri",
            "Chirala",
            "Anakapalle",
            "Kavali",
            "Palacole",
            "Sullurpeta",
            "Tanuku",
            "Rayachoti",
            "Srikalahasti",
            "Bapatla",
            "Naidupet",
            "Nagari",
            "Gudur",
            "Vinukonda",
            "Narasapuram",
            "Nuzvid",
            "Markapur",
            "Ponnur",
            "Kandukur",
            "Bobbili",
            "Rayadurg",
            "Samalkot",
            "Jaggaiahpet",
            "Tuni",
            "Amalapuram",
            "Bheemunipatnam",
            "Venkatagiri",
            "Sattenapalle",
            "Pithapuram",
            "Palasa Kasibugga",
            "Parvathipuram",
            "Macherla",
            "Gooty",
            "Salur",
            "Mandapeta",
            "Jammalamadugu",
            "Peddapuram",
            "Punganur",
            "Nidadavole",
            "Repalle",
            "Ramachandrapuram",
            "Kovvur",
            "Tiruvuru",
            "Uravakonda",
            "Narsipatnam",
            "Yerraguntla",
            "Pedana",
            "Puttur",
            "Renigunta",
            "Rajam",
            "Srisailam Project (Right Flank Colony) Township"
        ],
        "Punjab": [
            "Ludhiana",
            "Patiala",
            "Amritsar",
            "Jalandhar",
            "Bathinda",
            "Pathankot",
            "Hoshiarpur",
            "Batala",
            "Moga",
            "Malerkotla",
            "Khanna",
            "Mohali",
            "Barnala",
            "Firozpur",
            "Phagwara",
            "Kapurthala",
            "Zirakpur",
            "Kot Kapura",
            "Faridkot",
            "Muktsar",
            "Rajpura",
            "Sangrur",
            "Fazilka",
            "Gurdaspur",
            "Kharar",
            "Gobindgarh",
            "Mansa",
            "Malout",
            "Nabha",
            "Tarn Taran",
            "Jagraon",
            "Sunam",
            "Dhuri",
            "Firozpur Cantt.",
            "Sirhind Fatehgarh Sahib",
            "Rupnagar",
            "Jalandhar Cantt.",
            "Samana",
            "Nawanshahr",
            "Rampura Phul",
            "Nangal",
            "Nakodar",
            "Zira",
            "Patti",
            "Raikot",
            "Longowal",
            "Urmar Tanda",
            "Morinda, India",
            "Phillaur",
            "Pattran",
            "Qadian",
            "Sujanpur",
            "Mukerian",
            "Talwara"
        ],
        "Chandigarh": [
            "Chandigarh"
        ],
        "Rajasthan": [
            "Jaipur",
            "Jodhpur",
            "Bikaner",
            "Udaipur",
            "Ajmer",
            "Bhilwara",
            "Alwar",
            "Bharatpur",
            "Pali",
            "Barmer",
            "Sikar",
            "Tonk",
            "Sadulpur",
            "Sawai Madhopur",
            "Nagaur",
            "Makrana",
            "Sujangarh",
            "Sardarshahar",
            "Ladnu",
            "Ratangarh",
            "Nokha",
            "Nimbahera",
            "Suratgarh",
            "Rajsamand",
            "Lachhmangarh",
            "Rajgarh (Churu)",
            "Nasirabad",
            "Nohar",
            "Phalodi",
            "Nathdwara",
            "Pilani",
            "Merta City",
            "Sojat",
            "Neem-Ka-Thana",
            "Sirohi",
            "Pratapgarh",
            "Rawatbhata",
            "Sangaria",
            "Lalsot",
            "Pilibanga",
            "Pipar City",
            "Taranagar",
            "Vijainagar, Ajmer",
            "Sumerpur",
            "Sagwara",
            "Ramganj Mandi",
            "Lakheri",
            "Udaipurwati",
            "Losal",
            "Sri Madhopur",
            "Ramngarh",
            "Rawatsar",
            "Rajakhera",
            "Shahpura",
            "Shahpura",
            "Raisinghnagar",
            "Malpura",
            "Nadbai",
            "Sanchore",
            "Nagar",
            "Rajgarh (Alwar)",
            "Sheoganj",
            "Sadri",
            "Todaraisingh",
            "Todabhim",
            "Reengus",
            "Rajaldesar",
            "Sadulshahar",
            "Sambhar",
            "Prantij",
            "Mount Abu",
            "Mangrol",
            "Phulera",
            "Mandawa",
            "Pindwara",
            "Mandalgarh",
            "Takhatgarh"
        ],
        "Assam": [
            "Guwahati",
            "Silchar",
            "Dibrugarh",
            "Nagaon",
            "Tinsukia",
            "Jorhat",
            "Bongaigaon City",
            "Dhubri",
            "Diphu",
            "North Lakhimpur",
            "Tezpur",
            "Karimganj",
            "Sibsagar",
            "Goalpara",
            "Barpeta",
            "Lanka",
            "Lumding",
            "Mankachar",
            "Nalbari",
            "Rangia",
            "Margherita",
            "Mangaldoi",
            "Silapathar",
            "Mariani",
            "Marigaon"
        ],
        "Odisha": [
            "Bhubaneswar",
            "Cuttack",
            "Raurkela",
            "Brahmapur",
            "Sambalpur",
            "Puri",
            "Baleshwar Town",
            "Baripada Town",
            "Bhadrak",
            "Balangir",
            "Jharsuguda",
            "Bargarh",
            "Paradip",
            "Bhawanipatna",
            "Dhenkanal",
            "Barbil",
            "Kendujhar",
            "Sunabeda",
            "Rayagada",
            "Jatani",
            "Byasanagar",
            "Kendrapara",
            "Rajagangapur",
            "Parlakhemundi",
            "Talcher",
            "Sundargarh",
            "Phulabani",
            "Pattamundai",
            "Titlagarh",
            "Nabarangapur",
            "Soro",
            "Malkangiri",
            "Rairangpur",
            "Tarbha"
        ],
        "Chhattisgarh": [
            "Raipur",
            "Bhilai Nagar",
            "Korba",
            "Bilaspur",
            "Durg",
            "Rajnandgaon",
            "Jagdalpur",
            "Raigarh",
            "Ambikapur",
            "Mahasamund",
            "Dhamtari",
            "Chirmiri",
            "Bhatapara",
            "Dalli-Rajhara",
            "Naila Janjgir",
            "Tilda Newra",
            "Mungeli",
            "Manendragarh",
            "Sakti"
        ],
        "Jammu and Kashmir": [
            "Srinagar",
            "Jammu",
            "Baramula",
            "Anantnag",
            "Sopore",
            "KathUrban Agglomeration",
            "Rajauri",
            "Punch",
            "Udhampur"
        ],
        "Karnataka": [
            "Bengaluru",
            "Hubli-Dharwad",
            "Belagavi",
            "Mangaluru",
            "Davanagere",
            "Ballari",
            "Mysore",
            "Tumkur",
            "Shivamogga",
            "Raayachuru",
            "Robertson Pet",
            "Kolar",
            "Mandya",
            "Udupi",
            "Chikkamagaluru",
            "Karwar",
            "Ranebennuru",
            "Ranibennur",
            "Ramanagaram",
            "Gokak",
            "Yadgir",
            "Rabkavi Banhatti",
            "Shahabad",
            "Sirsi",
            "Sindhnur",
            "Tiptur",
            "Arsikere",
            "Nanjangud",
            "Sagara",
            "Sira",
            "Puttur",
            "Athni",
            "Mulbagal",
            "Surapura",
            "Siruguppa",
            "Mudhol",
            "Sidlaghatta",
            "Shahpur",
            "Saundatti-Yellamma",
            "Wadi",
            "Manvi",
            "Nelamangala",
            "Lakshmeshwar",
            "Ramdurg",
            "Nargund",
            "Tarikere",
            "Malavalli",
            "Savanur",
            "Lingsugur",
            "Vijayapura",
            "Sankeshwara",
            "Madikeri",
            "Talikota",
            "Sedam",
            "Shikaripur",
            "Mahalingapura",
            "Mudalagi",
            "Muddebihal",
            "Pavagada",
            "Malur",
            "Sindhagi",
            "Sanduru",
            "Afzalpur",
            "Maddur",
            "Madhugiri",
            "Tekkalakote",
            "Terdal",
            "Mudabidri",
            "Magadi",
            "Navalgund",
            "Shiggaon",
            "Shrirangapattana",
            "Sindagi",
            "Sakaleshapura",
            "Srinivaspur",
            "Ron",
            "Mundargi",
            "Sadalagi",
            "Piriyapatna",
            "Adyar"
        ],
        "Manipur": [
            "Imphal",
            "Thoubal",
            "Lilong",
            "Mayang Imphal"
        ],
        "Kerala": [
            "Thiruvananthapuram",
            "Kochi",
            "Kozhikode",
            "Kollam",
            "Thrissur",
            "Palakkad",
            "Alappuzha",
            "Malappuram",
            "Ponnani",
            "Vatakara",
            "Kanhangad",
            "Taliparamba",
            "Koyilandy",
            "Neyyattinkara",
            "Kayamkulam",
            "Nedumangad",
            "Kannur",
            "Tirur",
            "Kottayam",
            "Kasaragod",
            "Kunnamkulam",
            "Ottappalam",
            "Thiruvalla",
            "Thodupuzha",
            "Chalakudy",
            "Changanassery",
            "Punalur",
            "Nilambur",
            "Cherthala",
            "Perinthalmanna",
            "Mattannur",
            "Shoranur",
            "Varkala",
            "Paravoor",
            "Pathanamthitta",
            "Peringathur",
            "Attingal",
            "Kodungallur",
            "Pappinisseri",
            "Chittur-Thathamangalam",
            "Muvattupuzha",
            "Adoor",
            "Mavelikkara",
            "Mavoor",
            "Perumbavoor",
            "Vaikom",
            "Palai",
            "Panniyannur",
            "Guruvayoor",
            "Puthuppally",
            "Panamattom"
        ],
        "Delhi": [
            "Delhi",
            "New Delhi"
        ],
        "Dadra and Nagar Haveli": [
            "Silvassa"
        ],
        "Puducherry": [
            "Pondicherry",
            "Karaikal",
            "Yanam",
            "Mahe"
        ],
        "Uttarakhand": [
            "Dehradun",
            "Hardwar",
            "Haldwani-cum-Kathgodam",
            "Srinagar",
            "Kashipur",
            "Roorkee",
            "Rudrapur",
            "Rishikesh",
            "Ramnagar",
            "Pithoragarh",
            "Manglaur",
            "Nainital",
            "Mussoorie",
            "Tehri",
            "Pauri",
            "Nagla",
            "Sitarganj",
            "Bageshwar"
        ],
        "Uttar Pradesh": [
            "Lucknow",
            "Kanpur",
            "Firozabad",
            "Agra",
            "Meerut",
            "Varanasi",
            "Allahabad",
            "Amroha",
            "Moradabad",
            "Aligarh",
            "Saharanpur",
            "Noida",
            "Loni",
            "Jhansi",
            "Shahjahanpur",
            "Rampur",
            "Modinagar",
            "Hapur",
            "Etawah",
            "Sambhal",
            "Orai",
            "Bahraich",
            "Unnao",
            "Rae Bareli",
            "Lakhimpur",
            "Sitapur",
            "Lalitpur",
            "Pilibhit",
            "Chandausi",
            "Hardoi ",
            "Azamgarh",
            "Khair",
            "Sultanpur",
            "Tanda",
            "Nagina",
            "Shamli",
            "Najibabad",
            "Shikohabad",
            "Sikandrabad",
            "Shahabad, Hardoi",
            "Pilkhuwa",
            "Renukoot",
            "Vrindavan",
            "Ujhani",
            "Laharpur",
            "Tilhar",
            "Sahaswan",
            "Rath",
            "Sherkot",
            "Kalpi",
            "Tundla",
            "Sandila",
            "Nanpara",
            "Sardhana",
            "Nehtaur",
            "Seohara",
            "Padrauna",
            "Mathura",
            "Thakurdwara",
            "Nawabganj",
            "Siana",
            "Noorpur",
            "Sikandra Rao",
            "Puranpur",
            "Rudauli",
            "Thana Bhawan",
            "Palia Kalan",
            "Zaidpur",
            "Nautanwa",
            "Zamania",
            "Shikarpur, Bulandshahr",
            "Naugawan Sadat",
            "Fatehpur Sikri",
            "Shahabad, Rampur",
            "Robertsganj",
            "Utraula",
            "Sadabad",
            "Rasra",
            "Lar",
            "Lal Gopalganj Nindaura",
            "Sirsaganj",
            "Pihani",
            "Shamsabad, Agra",
            "Rudrapur",
            "Soron",
            "SUrban Agglomerationr",
            "Samdhan",
            "Sahjanwa",
            "Rampur Maniharan",
            "Sumerpur",
            "Shahganj",
            "Tulsipur",
            "Tirwaganj",
            "PurqUrban Agglomerationzi",
            "Shamsabad, Farrukhabad",
            "Warhapur",
            "Powayan",
            "Sandi",
            "Achhnera",
            "Naraura",
            "Nakur",
            "Sahaspur",
            "Safipur",
            "Reoti",
            "Sikanderpur",
            "Saidpur",
            "Sirsi",
            "Purwa",
            "Parasi",
            "Lalganj",
            "Phulpur",
            "Shishgarh",
            "Sahawar",
            "Samthar",
            "Pukhrayan",
            "Obra",
            "Niwai",
            "Mirzapur"
        ],
        "Bihar": [
            "Patna",
            "Gaya",
            "Bhagalpur",
            "Muzaffarpur",
            "Darbhanga",
            "Arrah",
            "Begusarai",
            "Chhapra",
            "Katihar",
            "Munger",
            "Purnia",
            "Saharsa",
            "Sasaram",
            "Hajipur",
            "Dehri-on-Sone",
            "Bettiah",
            "Motihari",
            "Bagaha",
            "Siwan",
            "Kishanganj",
            "Jamalpur",
            "Buxar",
            "Jehanabad",
            "Aurangabad",
            "Lakhisarai",
            "Nawada",
            "Jamui",
            "Sitamarhi",
            "Araria",
            "Gopalganj",
            "Madhubani",
            "Masaurhi",
            "Samastipur",
            "Mokameh",
            "Supaul",
            "Dumraon",
            "Arwal",
            "Forbesganj",
            "BhabUrban Agglomeration",
            "Narkatiaganj",
            "Naugachhia",
            "Madhepura",
            "Sheikhpura",
            "Sultanganj",
            "Raxaul Bazar",
            "Ramnagar",
            "Mahnar Bazar",
            "Warisaliganj",
            "Revelganj",
            "Rajgir",
            "Sonepur",
            "Sherghati",
            "Sugauli",
            "Makhdumpur",
            "Maner",
            "Rosera",
            "Nokha",
            "Piro",
            "Rafiganj",
            "Marhaura",
            "Mirganj",
            "Lalganj",
            "Murliganj",
            "Motipur",
            "Manihari",
            "Sheohar",
            "Maharajganj",
            "Silao",
            "Barh",
            "Asarganj"
        ],
        "Gujarat": [
            "Ahmedabad",
            "Surat",
            "Vadodara",
            "Rajkot",
            "Bhavnagar",
            "Jamnagar",
            "Nadiad",
            "Porbandar",
            "Anand",
            "Morvi",
            "Mahesana",
            "Bharuch",
            "Vapi",
            "Navsari",
            "Veraval",
            "Bhuj",
            "Godhra",
            "Palanpur",
            "Valsad",
            "Patan",
            "Deesa",
            "Amreli",
            "Anjar",
            "Dhoraji",
            "Khambhat",
            "Mahuva",
            "Keshod",
            "Wadhwan",
            "Ankleshwar",
            "Savarkundla",
            "Kadi",
            "Visnagar",
            "Upleta",
            "Una",
            "Sidhpur",
            "Unjha",
            "Mangrol",
            "Viramgam",
            "Modasa",
            "Palitana",
            "Petlad",
            "Kapadvanj",
            "Sihor",
            "Wankaner",
            "Limbdi",
            "Mandvi",
            "Thangadh",
            "Vyara",
            "Padra",
            "Lunawada",
            "Rajpipla",
            "Vapi",
            "Umreth",
            "Sanand",
            "Rajula",
            "Radhanpur",
            "Mahemdabad",
            "Ranavav",
            "Tharad",
            "Mansa",
            "Umbergaon",
            "Talaja",
            "Vadnagar",
            "Manavadar",
            "Salaya",
            "Vijapur",
            "Pardi",
            "Rapar",
            "Songadh",
            "Lathi",
            "Adalaj",
            "Chhapra",
            "Gandhinagar"
        ],
        "Telangana": [
            "Hyderabad",
            "Warangal",
            "Nizamabad",
            "Karimnagar",
            "Ramagundam",
            "Khammam",
            "Mahbubnagar",
            "Mancherial",
            "Adilabad",
            "Suryapet",
            "Jagtial",
            "Miryalaguda",
            "Nirmal",
            "Kamareddy",
            "Kothagudem",
            "Bodhan",
            "Palwancha",
            "Mandamarri",
            "Koratla",
            "Sircilla",
            "Tandur",
            "Siddipet",
            "Wanaparthy",
            "Kagaznagar",
            "Gadwal",
            "Sangareddy",
            "Bellampalle",
            "Bhongir",
            "Vikarabad",
            "Jangaon",
            "Bhadrachalam",
            "Bhainsa",
            "Farooqnagar",
            "Medak",
            "Narayanpet",
            "Sadasivpet",
            "Yellandu",
            "Manuguru",
            "Kyathampalle",
            "Nagarkurnool"
        ],
        "Meghalaya": [
            "Shillong",
            "Tura",
            "Nongstoin"
        ],
        "Himachal Praddesh": [
            "Manali"
        ],
        "Arunachal Pradesh": [
            "Naharlagun",
            "Pasighat"
        ],
        "Maharashtra": [
            "Mumbai",
            "Pune",
            "Nagpur",
            "Thane",
            "Nashik",
            "Kalyan-Dombivali",
            "Vasai-Virar",
            "Solapur",
            "Mira-Bhayandar",
            "Bhiwandi",
            "Amravati",
            "Nanded-Waghala",
            "Sangli",
            "Malegaon",
            "Akola",
            "Latur",
            "Dhule",
            "Ahmednagar",
            "Ichalkaranji",
            "Parbhani",
            "Panvel",
            "Yavatmal",
            "Achalpur",
            "Osmanabad",
            "Nandurbar",
            "Satara",
            "Wardha",
            "Udgir",
            "Aurangabad",
            "Amalner",
            "Akot",
            "Pandharpur",
            "Shrirampur",
            "Parli",
            "Washim",
            "Ambejogai",
            "Manmad",
            "Ratnagiri",
            "Uran Islampur",
            "Pusad",
            "Sangamner",
            "Shirpur-Warwade",
            "Malkapur",
            "Wani",
            "Lonavla",
            "Talegaon Dabhade",
            "Anjangaon",
            "Umred",
            "Palghar",
            "Shegaon",
            "Ozar",
            "Phaltan",
            "Yevla",
            "Shahade",
            "Vita",
            "Umarkhed",
            "Warora",
            "Pachora",
            "Tumsar",
            "Manjlegaon",
            "Sillod",
            "Arvi",
            "Nandura",
            "Vaijapur",
            "Wadgaon Road",
            "Sailu",
            "Murtijapur",
            "Tasgaon",
            "Mehkar",
            "Yawal",
            "Pulgaon",
            "Nilanga",
            "Wai",
            "Umarga",
            "Paithan",
            "Rahuri",
            "Nawapur",
            "Tuljapur",
            "Morshi",
            "Purna",
            "Satana",
            "Pathri",
            "Sinnar",
            "Uchgaon",
            "Uran",
            "Pen",
            "Karjat",
            "Manwath",
            "Partur",
            "Sangole",
            "Mangrulpir",
            "Risod",
            "Shirur",
            "Savner",
            "Sasvad",
            "Pandharkaoda",
            "Talode",
            "Shrigonda",
            "Shirdi",
            "Raver",
            "Mukhed",
            "Rajura",
            "Vadgaon Kasba",
            "Tirora",
            "Mahad",
            "Lonar",
            "Sawantwadi",
            "Pathardi",
            "Pauni",
            "Ramtek",
            "Mul",
            "Soyagaon",
            "Mangalvedhe",
            "Narkhed",
            "Shendurjana",
            "Patur",
            "Mhaswad",
            "Loha",
            "Nandgaon",
            "Warud"
        ],
        "Goa": [
            "Marmagao",
            "Panaji",
            "Margao",
            "Mapusa"
        ],
        "West Bengal": [
            "Kolkata",
            "Siliguri",
            "Asansol",
            "Raghunathganj",
            "Kharagpur",
            "Naihati",
            "English Bazar",
            "Baharampur",
            "Hugli-Chinsurah",
            "Raiganj",
            "Jalpaiguri",
            "Santipur",
            "Balurghat",
            "Medinipur",
            "Habra",
            "Ranaghat",
            "Bankura",
            "Nabadwip",
            "Darjiling",
            "Purulia",
            "Arambagh",
            "Tamluk",
            "AlipurdUrban Agglomerationr",
            "Suri",
            "Jhargram",
            "Gangarampur",
            "Rampurhat",
            "Kalimpong",
            "Sainthia",
            "Taki",
            "Murshidabad",
            "Memari",
            "Paschim Punropara",
            "Tarakeswar",
            "Sonamukhi",
            "PandUrban Agglomeration",
            "Mainaguri",
            "Malda",
            "Panchla",
            "Raghunathpur",
            "Mathabhanga",
            "Monoharpur",
            "Srirampore",
            "Adra"
        ]
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        // Reset selected city when state changes
        setSelectedCity('');
    };
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');

    // Define your courses and corresponding programs here
    const courseProgramMap = {
        "Commerce": ["BCom",
            "BCom Taxation",
            "BCom Banking and Finance",
            "BCom Financial Accounting",
            "BCom International Business"],
        "Design": ["BA Journalism and Mass Communication",
            "BSc Fashion Designing",
            "MA Animation and Design",
            "MSc Fashion Designing"],
        "Communication, and Arts:": ["BA Journalism and Mass Communication",
            "Bachelor of Fine Arts BFA",
            "MA Journalism and Mass Communication"],
        // Add more courses and programs as needed
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        // Reset selected program when course changes
        setSelectedProgram('');
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/gynarthi-web", {
                name,
                email,
                phone,
                dob,
                state: selectedState,
                city: selectedCity,
                course: selectedCourse,
                program: selectedProgram
            });
            console.log("Form submission successful");
            setSubmitted(true); // Set submitted state to true
            // Reset the form fields
            setName('');
            setEmail('');
            setPhone('');
            setDob('');
            setSelectedState('');
            setSelectedCity('');
            setSelectedCourse('');
            setSelectedProgram('');
            // Display a success message for a few seconds
            setTimeout(() => {
                setSubmitted(false); // Reset the submitted state
            }, 3000); // 3000 milliseconds = 3 seconds
        } catch (error) {
            console.error("Form submission failed:", error);
        }
    };


    const handleNameChange = (e) => {
        const input = e.target.value;
        // Only allow alphabets in the name field
        if (/^[A-Za-z ]+$/.test(input)) {
            setName(input);
        }
    };

    const handleEmailChange = (e) => {
        const input = e.target.value;
        // Validate email pattern
        setEmail(input);
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        // Only allow 10-digit numbers in the phone field
        if (/^[0-9]{0,10}$/.test(input)) {
            setPhone(input);
        }
    };


    return (
        <main>
            <section className="bg-cover bg-center  flex items-center imgbc " >
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 md:pr-4 flex flex-col justify-center">
                            <h2 className="heading mb-4 text-white">Empowering Minds to Shape a Better Tomorrow</h2>
                            <p className="paragraph mb-4 text-white">Gyanarthi Media College, Kashipur, affiliated with the Kumaun University, is one of the best colleges in town with diversified faculty and industry specific courses in media, fashion, and commerce.</p>
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <div className="bgform p-2 md:p-4 sm:p-8 rounded-md shadow-md flex items-center justify-center flex-col">
                                <h3 className="mb-4 text-white formheading">GYANARTHI APPLICATION FORM 2024</h3>
                                <p className="mb-4 formsubheading">Apply for Gyanarthi 2024 - ( Phase- 1)</p>
                                <div className="bg-red-500 text-white p-4 mb-4 rounded-md">
                                    Registration End Date: Date, 2024
                                </div>
                                <form className='w-full' onSubmit={handleSubmit} method="POST">
                                    <div className="mb-4 name" >
                                        <div className="flex mb-2">
                                            <div className="w-full ">
                                                <input
                                                    type="text"
                                                    className="w-full p-2 border rounded-md"
                                                    placeholder="Full Name"
                                                    value={name}
                                                    name='fullname'
                                                    onChange={handleNameChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-1/2 ">
                                                <input
                                                    type="email"
                                                    name='email'
                                                    className="w-full p-2 border rounded-md"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    required
                                                />
                                            </div>
                                            <div className="w-1/2 pl-2">
                                                <input
                                                    type="tel"
                                                    name='phone'
                                                    className="w-full p-2 border rounded-md"
                                                    placeholder="Phone"
                                                    value={phone}
                                                    onChange={handlePhoneChange}
                                                    required
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <h4 className='text-white chy'>Choose your </h4>
                                        <div className='flex mb-2 mt-2'>
                                            <div className="w-full">
                                                <input
                                                    type="date"
                                                    name="dob"
                                                    className="w-full p-2 border rounded-md"
                                                    placeholder="Date of Birth"
                                                    value={dob}
                                                    onChange={handleDobChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex mb-2">
                                            <div className="w-1/2 ">
                                                <select
                                                    className="w-full p-2 border rounded-md"
                                                    onChange={handleStateChange}
                                                    value={selectedState}
                                                    name='state'
                                                >
                                                    <option value="">Select State</option>
                                                    {Object.keys(stateCityMap).map((state, index) => (
                                                        <option key={index} value={state}>{state}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="w-1/2 pl-2">
                                                <select
                                                    className="w-full p-2 border rounded-md"
                                                    name='city'
                                                    onChange={(e) => setSelectedCity(e.target.value)}
                                                    value={selectedCity}
                                                    disabled={!selectedState} // Disable city select until state is selected
                                                >
                                                    <option value="">Select City</option>
                                                    {stateCityMap[selectedState] && stateCityMap[selectedState].map((city, index) => (
                                                        <option key={index} value={city}>{city}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex mb-2">
                                            <div className="w-1/2 ">
                                                <select
                                                    className="w-full p-2 border rounded-md"
                                                    onChange={handleCourseChange}
                                                    value={selectedCourse}
                                                    name='course'
                                                >
                                                    <option value="">Select Course</option>
                                                    {Object.keys(courseProgramMap).map((course, index) => (
                                                        <option key={index} value={course}>{course}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="w-1/2 pl-2">
                                                <select
                                                    className="w-full p-2 border rounded-md"
                                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                                    value={selectedProgram}
                                                    name='program'
                                                    disabled={!selectedCourse} // Disable program select until course is selected
                                                >
                                                    <option value="">Select Program</option>
                                                    {courseProgramMap[selectedCourse] && courseProgramMap[selectedCourse].map((program, index) => (
                                                        <option key={index} value={program}>{program}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="flex items-center  text-white">
                                            <input
                                                type="checkbox"
                                                className="mr-2 text-white"

                                                required
                                            />
                                            By submitting this form, I agree to receive notifications from the University in the form of SMS/ E-mail/ Call.
                                        </label>
                                    </div>

                                    <div className="flex justify-between gap-4">
                                        <button type="submit" className="homebutton text-white px-4 py-2 rounded-md w-full">SUBMIT</button>
                                    </div>
                                </form>
                                {submitted && <p className='success'>Message sent successfully!</p>}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main
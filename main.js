const file = 'districts.json';

const alipsa = {
  0: {
    District: 'North and Middle Andaman',
    State: 'Andaman and Nicobar Islands',
    Latitude: 12.61123865,
    Longitude: 92.83165406414926,
  },
  1: {
    District: 'South Andaman',
    State: 'Andaman and Nicobar Islands',
    Latitude: 10.7056905,
    Longitude: 92.48746789633373,
  },
  2: {
    District: 'Anantapur',
    State: 'Andhra Pradesh',
    Latitude: 14.6546235,
    Longitude: 77.55625984224562,
  },
  3: {
    District: 'Chittoor',
    State: 'Andhra Pradesh',
    Latitude: 13.1601048,
    Longitude: 79.15555061803596,
  },
  4: {
    District: 'East Godavari',
    State: 'Andhra Pradesh',
    Latitude: 17.233496,
    Longitude: 81.7225986,
  },
  5: {
    District: 'Guntur',
    State: 'Andhra Pradesh',
    Latitude: 16.2915189,
    Longitude: 80.4541588,
  },
  6: {
    District: 'Krishna',
    State: 'Andhra Pradesh',
    Latitude: 16.6691525,
    Longitude: 80.7190024,
  },
  7: {
    District: 'Kurnool',
    State: 'Andhra Pradesh',
    Latitude: 15.8309251,
    Longitude: 78.0425373,
  },
  8: {
    District: 'Prakasam',
    State: 'Andhra Pradesh',
    Latitude: 15.5,
    Longitude: 79.5,
  },
  9: {
    District: 'Srikakulam',
    State: 'Andhra Pradesh',
    Latitude: 18.32002205,
    Longitude: 83.91607719937166,
  },
  10: {
    District: 'Visakhapatnam',
    State: 'Andhra Pradesh',
    Latitude: 17.7231276,
    Longitude: 83.3012842,
  },
  11: {
    District: 'Vizianagaram',
    State: 'Andhra Pradesh',
    Latitude: 18.1120819,
    Longitude: 83.4052196224888,
  },
  12: {
    District: 'West Godavari',
    State: 'Andhra Pradesh',
    Latitude: 17,
    Longitude: 81.166667,
  },
  13: {
    District: 'Y.S.R. Kadapa',
    State: 'Andhra Pradesh',
    Latitude: 14.0585273,
    Longitude: 78.7535631,
  },
  14: {
    District: 'Anjaw',
    State: 'Arunachal Pradesh',
    Latitude: 28.1114301,
    Longitude: 96.82699963398373,
  },
  15: {
    District: 'Changlang',
    State: 'Arunachal Pradesh',
    Latitude: 27.1398402,
    Longitude: 95.7382485,
  },
  16: {
    District: 'East Kameng',
    State: 'Arunachal Pradesh',
    Latitude: 27.3,
    Longitude: 93.05,
  },
  17: {
    District: 'East Siang',
    State: 'Arunachal Pradesh',
    Latitude: 28.3,
    Longitude: 95.15,
  },
  18: {
    District: 'Kamle',
    State: 'Arunachal Pradesh',
    Latitude: 27.7312325,
    Longitude: 94.0964663257624,
  },
  19: {
    District: 'Kra Daadi',
    State: 'Arunachal Pradesh',
    Latitude: 27.96354175,
    Longitude: 93.76656538768381,
  },
  20: {
    District: 'Kurung Kumey',
    State: 'Arunachal Pradesh',
    Latitude: 27.98636765,
    Longitude: 93.15783468644102,
  },
  21: {
    District: 'Lepa Rada',
    State: 'Arunachal Pradesh',
    Latitude: 27.9211266,
    Longitude: 94.74093620019156,
  },
  22: {
    District: 'Lohit',
    State: 'Arunachal Pradesh',
    Latitude: 28.035016149999997,
    Longitude: 96.17135154220676,
  },
  23: {
    District: 'Longding',
    State: 'Arunachal Pradesh',
    Latitude: 26.879454600000003,
    Longitude: 95.3155652456941,
  },
  24: {
    District: 'Lower Dibang Valley',
    State: 'Arunachal Pradesh',
    Latitude: 28.21495625,
    Longitude: 95.87877403567019,
  },
  25: {
    District: 'Lower Siang',
    State: 'Arunachal Pradesh',
    Latitude: 27.80069825,
    Longitude: 94.56502334121075,
  },
  26: {
    District: 'Lower Subansiri',
    State: 'Arunachal Pradesh',
    Latitude: 27.8,
    Longitude: 93.6,
  },
  27: {
    District: 'Namsai',
    State: 'Arunachal Pradesh',
    Latitude: 27.71403055,
    Longitude: 96.01597093953018,
  },
  28: {
    District: 'Pakke Kessang',
    State: 'Arunachal Pradesh',
    Latitude: 27.15828555,
    Longitude: 93.15615024389129,
  },
  29: {
    District: 'Papum Pare',
    State: 'Arunachal Pradesh',
    Latitude: 27.286366649999998,
    Longitude: 93.61875168206382,
  },
  30: {
    District: 'Shi Yomi',
    State: 'Arunachal Pradesh',
    Latitude: 28.68516625,
    Longitude: 94.23678241115617,
  },
  31: {
    District: 'Siang',
    State: 'Arunachal Pradesh',
    Latitude: 28.477491999999998,
    Longitude: 94.81655728795752,
  },
  32: {
    District: 'Tawang',
    State: 'Arunachal Pradesh',
    Latitude: 27.5879186,
    Longitude: 91.863733,
  },
  33: {
    District: 'Tirap',
    State: 'Arunachal Pradesh',
    Latitude: 27.03016895,
    Longitude: 95.49791754505583,
  },
  34: {
    District: 'Upper Dibang Valley',
    State: 'Arunachal Pradesh',
    Latitude: 28.7,
    Longitude: 95.7,
  },
  35: {
    District: 'Upper Siang',
    State: 'Arunachal Pradesh',
    Latitude: 28.73120455,
    Longitude: 95.03773151350946,
  },
  36: {
    District: 'Upper Subansiri',
    State: 'Arunachal Pradesh',
    Latitude: 28.3,
    Longitude: 94,
  },
  37: {
    District: 'West Kameng',
    State: 'Arunachal Pradesh',
    Latitude: 27.4,
    Longitude: 92.35,
  },
  38: {
    District: 'West Siang',
    State: 'Arunachal Pradesh',
    Latitude: 28.4,
    Longitude: 94.55,
  },
  39: {
    District: 'Baksa',
    State: 'Assam',
    Latitude: 26.62781825,
    Longitude: 91.46148578057333,
  },
  40: {
    District: 'Barpeta',
    State: 'Assam',
    Latitude: 26.34142215,
    Longitude: 91.01674328474073,
  },
  41: {
    District: 'Biswanath',
    State: 'Assam',
    Latitude: 26.7773957,
    Longitude: 93.25694367444689,
  },
  42: {
    District: 'Bongaigaon',
    State: 'Assam',
    Latitude: 26.4800126,
    Longitude: 90.5580387,
  },
  43: {
    District: 'Cachar',
    State: 'Assam',
    Latitude: 24.758639950000003,
    Longitude: 92.88166475768219,
  },
  44: {
    District: 'Charaideo',
    State: 'Assam',
    Latitude: 27.06971635,
    Longitude: 95.06426298389661,
  },
  45: {
    District: 'Chirang',
    State: 'Assam',
    Latitude: 26.6464231,
    Longitude: 90.62415698729875,
  },
  46: {
    District: 'Darrang',
    State: 'Assam',
    Latitude: 26.75,
    Longitude: 92.5,
  },
  47: {
    District: 'Dhemaji',
    State: 'Assam',
    Latitude: 27.466831499999998,
    Longitude: 94.51786508708852,
  },
  48: {
    District: 'Dhubri',
    State: 'Assam',
    Latitude: 26.01894625,
    Longitude: 89.94188952461522,
  },
  49: {
    District: 'Dibrugarh',
    State: 'Assam',
    Latitude: 27.4844597,
    Longitude: 94.9019447,
  },
  50: {
    District: 'Dima Hasao',
    State: 'Assam',
    Latitude: 25.400362549999997,
    Longitude: 93.07522922678905,
  },
  51: {
    District: 'Goalpara',
    State: 'Assam',
    Latitude: 26.1783623,
    Longitude: 90.6226683,
  },
  52: {
    District: 'Golaghat',
    State: 'Assam',
    Latitude: 26.40490095,
    Longitude: 94.03209112120626,
  },
  53: {
    District: 'Hailakandi',
    State: 'Assam',
    Latitude: 24.68845365,
    Longitude: 92.57381528240944,
  },
  54: {
    District: 'Hojai',
    State: 'Assam',
    Latitude: 26.009390850000003,
    Longitude: 92.84879014262606,
  },
  55: {
    District: 'Jorhat',
    State: 'Assam',
    Latitude: 26.7577925,
    Longitude: 94.2079645,
  },
  56: {
    District: 'Kamrup',
    State: 'Assam',
    Latitude: 26.12755515,
    Longitude: 91.2998714797357,
  },
  57: {
    District: 'Kamrup Metropolitan',
    State: 'Assam',
    Latitude: 26.13526375,
    Longitude: 91.86167062524619,
  },
  58: {
    District: 'Karbi Anglong',
    State: 'Assam',
    Latitude: 26,
    Longitude: 93.5,
  },
  59: {
    District: 'Karimganj',
    State: 'Assam',
    Latitude: 24.8483482,
    Longitude: 92.33221292310328,
  },
  60: {
    District: 'Kokrajhar',
    State: 'Assam',
    Latitude: 26.58687695,
    Longitude: 90.29293105124796,
  },
  61: {
    District: 'Lakhimpur',
    State: 'Assam',
    Latitude: 27.0827158,
    Longitude: 93.9978423,
  },
  62: {
    District: 'Majuli',
    State: 'Assam',
    Latitude: 27.021952849999998,
    Longitude: 94.32742302965544,
  },
  63: {
    District: 'Morigaon',
    State: 'Assam',
    Latitude: 26.2578325,
    Longitude: 92.3419427,
  },
  64: {
    District: 'Nagaon',
    State: 'Assam',
    Latitude: 26.30414915,
    Longitude: 92.71605974430346,
  },
  65: {
    District: 'Nalbari',
    State: 'Assam',
    Latitude: 26.42386165,
    Longitude: 91.4512275462117,
  },
  66: {
    District: 'Sivasagar',
    State: 'Assam',
    Latitude: 26.9834936,
    Longitude: 94.6394226,
  },
  67: {
    District: 'Sonitpur',
    State: 'Assam',
    Latitude: 26.767770749999997,
    Longitude: 92.70140885850532,
  },
  68: {
    District: 'South Salmara Mankachar',
    State: 'Assam',
    Latitude: 25.7604472,
    Longitude: 89.8928061082699,
  },
  69: {
    District: 'Tinsukia',
    State: 'Assam',
    Latitude: 27.52016575,
    Longitude: 95.5306347312879,
  },
  70: {
    District: 'Udalguri',
    State: 'Assam',
    Latitude: 26.776480300000003,
    Longitude: 92.10537533897156,
  },
  71: {
    District: 'West Karbi Anglong',
    State: 'Assam',
    Latitude: 25.85291415,
    Longitude: 92.58756812404593,
  },
  72: {
    District: 'Araria',
    State: 'Bihar',
    Latitude: 26.26498795,
    Longitude: 87.37162648106798,
  },
  73: {
    District: 'Arwal',
    State: 'Bihar',
    Latitude: 25.180777149999997,
    Longitude: 84.65920203021554,
  },
  74: {
    District: 'Aurangabad',
    State: 'Bihar',
    Latitude: 24.75,
    Longitude: 84.5,
  },
  75: {
    District: 'Banka',
    State: 'Bihar',
    Latitude: 24.8655681,
    Longitude: 86.87278642295597,
  },
  76: {
    District: 'Begusarai',
    State: 'Bihar',
    Latitude: 25.5127194,
    Longitude: 86.09057109140021,
  },
  77: {
    District: 'Bhagalpur',
    State: 'Bihar',
    Latitude: 25.28669805,
    Longitude: 87.13225355111148,
  },
  78: {
    District: 'Bhojpur',
    State: 'Bihar',
    Latitude: 25.25,
    Longitude: 84.25,
  },
  79: {
    District: 'Buxar',
    State: 'Bihar',
    Latitude: 25.562071500000002,
    Longitude: 84.01567204651289,
  },
  80: {
    District: 'Darbhanga',
    State: 'Bihar',
    Latitude: 26.08314325,
    Longitude: 86.03257096612822,
  },
  81: {
    District: 'Gaya',
    State: 'Bihar',
    Latitude: 24.7964355,
    Longitude: 85.0079563,
  },
  82: {
    District: 'Gopalganj',
    State: 'Bihar',
    Latitude: 26.4207265,
    Longitude: 84.37406407415165,
  },
  83: {
    District: 'Jamui',
    State: 'Bihar',
    Latitude: 24.967852049999998,
    Longitude: 86.17351147289283,
  },
  84: {
    District: 'Jehanabad',
    State: 'Bihar',
    Latitude: 25.15247135,
    Longitude: 85.00687848982191,
  },
  85: {
    District: 'Kaimur',
    State: 'Bihar',
    Latitude: 24.974864349999997,
    Longitude: 83.57643904700731,
  },
  86: {
    District: 'Katihar',
    State: 'Bihar',
    Latitude: 25.560900349999997,
    Longitude: 87.64765353997149,
  },
  87: {
    District: 'Khagaria',
    State: 'Bihar',
    Latitude: 25.4916868,
    Longitude: 86.69910848212217,
  },
  88: {
    District: 'Kishanganj',
    State: 'Bihar',
    Latitude: 26.29863795,
    Longitude: 87.95314810923409,
  },
  89: {
    District: 'Lakhisarai',
    State: 'Bihar',
    Latitude: 25.167702900000002,
    Longitude: 86.05935924304018,
  },
  90: {
    District: 'Madhepura',
    State: 'Bihar',
    Latitude: 25.9259562,
    Longitude: 86.82042961035677,
  },
  91: {
    District: 'Madhubani',
    State: 'Bihar',
    Latitude: 26.350071999999997,
    Longitude: 86.22914688962271,
  },
  92: {
    District: 'Munger',
    State: 'Bihar',
    Latitude: 25.22081165,
    Longitude: 86.51720367235285,
  },
  93: {
    District: 'Muzaffarpur',
    State: 'Bihar',
    Latitude: 26.1486581,
    Longitude: 85.34001282479626,
  },
  94: {
    District: 'Nalanda',
    State: 'Bihar',
    Latitude: 25.1364914,
    Longitude: 85.44365464855682,
  },
  95: {
    District: 'Nawada',
    State: 'Bihar',
    Latitude: 24.818123999999997,
    Longitude: 85.5185562336921,
  },
  96: {
    District: 'West Champaran',
    State: 'Bihar',
    Latitude: 26.6919717,
    Longitude: 84.5796928,
  },
  97: {
    District: 'Patna',
    State: 'Bihar',
    Latitude: 25.6093239,
    Longitude: 85.1235252,
  },
  98: {
    District: 'East Champaran',
    State: 'Bihar',
    Latitude: 26.6460551,
    Longitude: 84.9135447,
  },
  99: {
    District: 'Purnia',
    State: 'Bihar',
    Latitude: 25.7773601,
    Longitude: 87.4731227,
  },
  100: {
    District: 'Rohtas',
    State: 'Bihar',
    Latitude: 24.93928775,
    Longitude: 84.01945448852067,
  },
  101: {
    District: 'Saharsa',
    State: 'Bihar',
    Latitude: 25.83264165,
    Longitude: 86.61489283342814,
  },
  102: {
    District: 'Samastipur',
    State: 'Bihar',
    Latitude: 25.7744929,
    Longitude: 85.86626813370123,
  },
  103: {
    District: 'Saran',
    State: 'Bihar',
    Latitude: 25.90835495,
    Longitude: 84.78074760594323,
  },
  104: {
    District: 'Sheikhpura',
    State: 'Bihar',
    Latitude: 25.12635425,
    Longitude: 85.81510620944194,
  },
  105: {
    District: 'Sheohar',
    State: 'Bihar',
    Latitude: 26.49436945,
    Longitude: 85.27280559513999,
  },
  106: {
    District: 'Sitamarhi',
    State: 'Bihar',
    Latitude: 26.5876547,
    Longitude: 85.5056744,
  },
  107: {
    District: 'Siwan',
    State: 'Bihar',
    Latitude: 26.1310043,
    Longitude: 84.39125660595198,
  },
  108: {
    District: 'Supaul',
    State: 'Bihar',
    Latitude: 26.2768118,
    Longitude: 86.79658662614811,
  },
  109: {
    District: 'Vaishali',
    State: 'Bihar',
    Latitude: 25.75,
    Longitude: 85.416667,
  },
  110: {
    District: 'Chandigarh',
    State: 'Chandigarh',
    Latitude: 30.7334421,
    Longitude: 76.7797143,
  },
  111: {
    District: 'Balod',
    State: 'Chhattisgarh',
    Latitude: 20.73218365,
    Longitude: 81.14335738365043,
  },
  112: {
    District: 'Baloda Bazar',
    State: 'Chhattisgarh',
    Latitude: 21.572645950000002,
    Longitude: 82.43670691696435,
  },
  113: {
    District: 'Balrampur',
    State: 'Chhattisgarh',
    Latitude: 23.6263016,
    Longitude: 83.48245091656527,
  },
  114: {
    District: 'Bastar',
    State: 'Chhattisgarh',
    Latitude: 19.11912825,
    Longitude: 81.82918648971713,
  },
  115: {
    District: 'Bijapur',
    State: 'Chhattisgarh',
    Latitude: 18.769041350000002,
    Longitude: 80.74151192966231,
  },
  116: {
    District: 'Bilaspur',
    State: 'Chhattisgarh',
    Latitude: 22.383333,
    Longitude: 82.133333,
  },
  117: {
    District: 'Dhamtari',
    State: 'Chhattisgarh',
    Latitude: 20.7083903,
    Longitude: 81.5485253,
  },
  118: {
    District: 'Durg',
    State: 'Chhattisgarh',
    Latitude: 21.19903535,
    Longitude: 81.3979545573657,
  },
  119: {
    District: 'Gariaband',
    State: 'Chhattisgarh',
    Latitude: 20.42857015,
    Longitude: 82.24698984817437,
  },
  120: {
    District: 'Janjgir Champa',
    State: 'Chhattisgarh',
    Latitude: 21.967126399999998,
    Longitude: 82.6647242496104,
  },
  121: {
    District: 'Jashpur',
    State: 'Chhattisgarh',
    Latitude: 22.76678355,
    Longitude: 83.95304518953317,
  },
  122: {
    District: 'Kondagaon',
    State: 'Chhattisgarh',
    Latitude: 19.5885769,
    Longitude: 81.6628742,
  },
  123: {
    District: 'Korba',
    State: 'Chhattisgarh',
    Latitude: 22.51976955,
    Longitude: 82.62951462416818,
  },
  124: {
    District: 'Koriya',
    State: 'Chhattisgarh',
    Latitude: 23.431414349999997,
    Longitude: 82.31393341197054,
  },
  125: {
    District: 'Mahasamund',
    State: 'Chhattisgarh',
    Latitude: 21.1882332,
    Longitude: 82.48484762499999,
  },
  126: {
    District: 'Mungeli',
    State: 'Chhattisgarh',
    Latitude: 22.0661098,
    Longitude: 81.6874282,
  },
  127: {
    District: 'Narayanpur',
    State: 'Chhattisgarh',
    Latitude: 19.5842032,
    Longitude: 81.1136985512029,
  },
  128: {
    District: 'Raigarh',
    State: 'Chhattisgarh',
    Latitude: 22.5,
    Longitude: 83.5,
  },
  129: {
    District: 'Raipur',
    State: 'Chhattisgarh',
    Latitude: 21.2379469,
    Longitude: 81.6336833,
  },
  130: {
    District: 'Rajnandgaon',
    State: 'Chhattisgarh',
    Latitude: 20.9727404,
    Longitude: 80.69155548263583,
  },
  131: {
    District: 'Sukma',
    State: 'Chhattisgarh',
    Latitude: 18.26654225,
    Longitude: 81.29252341475065,
  },
  132: {
    District: 'Surajpur',
    State: 'Chhattisgarh',
    Latitude: 23.35151515,
    Longitude: 82.97290272665015,
  },
  133: {
    District: 'Surguja',
    State: 'Chhattisgarh',
    Latitude: 22.94941835,
    Longitude: 83.1655491457949,
  },
  134: {
    District: 'Uttar Bastar Kanker',
    State: 'Chhattisgarh',
    Latitude: 20.1270026,
    Longitude: 80.98109349472911,
  },
  135: {
    District: 'Gaurela Pendra Marwahi',
    State: 'Chhattisgarh',
    Latitude: 22.8322152,
    Longitude: 81.95776398945898,
  },
  136: {
    District: 'Dadra and Nagar Haveli',
    State: 'Dadra and Nagar Haveli and Daman and Diu',
    Latitude: 20.2735169,
    Longitude: 73.0043578,
  },
  137: {
    District: 'Daman',
    State: 'Dadra and Nagar Haveli and Daman and Diu',
    Latitude: 20.42000485,
    Longitude: 72.86376290300566,
  },
  138: {
    District: 'Diu',
    State: 'Dadra and Nagar Haveli and Daman and Diu',
    Latitude: 20.7137783,
    Longitude: 70.9853635,
  },
  139: {
    District: 'Central Delhi',
    State: 'Delhi',
    Latitude: 28.69854835,
    Longitude: 77.21939141568413,
  },
  140: {
    District: 'East Delhi',
    State: 'Delhi',
    Latitude: 28.6204767,
    Longitude: 77.30918071344418,
  },
  141: {
    District: 'New Delhi',
    State: 'Delhi',
    Latitude: 28.6138954,
    Longitude: 77.2090057,
  },
  142: {
    District: 'North Delhi',
    State: 'Delhi',
    Latitude: 28.6138954,
    Longitude: 77.2090057,
  },
  143: {
    District: 'North East Delhi',
    State: 'Delhi',
    Latitude: 28.72330795,
    Longitude: 77.26685650778668,
  },
  144: {
    District: 'North West Delhi',
    State: 'Delhi',
    Latitude: 28.6138954,
    Longitude: 77.2090057,
  },
  145: {
    District: 'Shahdara',
    State: 'Delhi',
    Latitude: 28.6733333,
    Longitude: 77.2890248,
  },
  146: {
    District: 'South Delhi',
    State: 'Delhi',
    Latitude: 28.485169399999997,
    Longitude: 77.19637972381611,
  },
  147: {
    District: 'South East Delhi',
    State: 'Delhi',
    Latitude: 28.5444411,
    Longitude: 77.27287301731174,
  },
  148: {
    District: 'South West Delhi',
    State: 'Delhi',
    Latitude: 28.58644805,
    Longitude: 76.97915298462692,
  },
  149: {
    District: 'West Delhi',
    State: 'Delhi',
    Latitude: 28.6479519,
    Longitude: 77.08556541088615,
  },
  150: {
    District: 'North Goa',
    State: 'Goa',
    Latitude: 15.60444125,
    Longitude: 74.00172406307475,
  },
  151: {
    District: 'South Goa',
    State: 'Goa',
    Latitude: 15.21961365,
    Longitude: 74.1152813019196,
  },
  152: {
    District: 'Ahmedabad',
    State: 'Gujarat',
    Latitude: 23.0216238,
    Longitude: 72.5797068,
  },
  153: {
    District: 'Amreli',
    State: 'Gujarat',
    Latitude: 20.866667,
    Longitude: 70.75,
  },
  154: {
    District: 'Anand',
    State: 'Gujarat',
    Latitude: 22.5584995,
    Longitude: 72.9625629,
  },
  155: {
    District: 'Aravalli',
    State: 'Gujarat',
    Latitude: 23.48345905,
    Longitude: 73.39881244097361,
  },
  156: {
    District: 'Banaskantha',
    State: 'Gujarat',
    Latitude: 24.172056,
    Longitude: 72.431134,
  },
  157: {
    District: 'Bharuch',
    State: 'Gujarat',
    Latitude: 21.75,
    Longitude: 73,
  },
  158: {
    District: 'Bhavnagar',
    State: 'Gujarat',
    Latitude: 21.7718836,
    Longitude: 72.1416449,
  },
  159: {
    District: 'Botad',
    State: 'Gujarat',
    Latitude: 22.1686,
    Longitude: 71.6685,
  },
  160: {
    District: 'Chhota Udaipur',
    State: 'Gujarat',
    Latitude: 22.3048651,
    Longitude: 74.0126114,
  },
  161: {
    District: 'Devbhumi Dwarka',
    State: 'Gujarat',
    Latitude: 22.224429,
    Longitude: 69.6733919,
  },
  162: {
    District: 'Dahod',
    State: 'Gujarat',
    Latitude: 22.8358542,
    Longitude: 74.2556782,
  },
  163: {
    District: 'Gandhinagar',
    State: 'Gujarat',
    Latitude: 23.2232877,
    Longitude: 72.6492267,
  },
  164: {
    District: 'Gir Somnath',
    State: 'Gujarat',
    Latitude: 20.9911049,
    Longitude: 70.68806405046848,
  },
  165: {
    District: 'Jamnagar',
    State: 'Gujarat',
    Latitude: 22.4732415,
    Longitude: 70.0552102,
  },
  166: {
    District: 'Junagadh',
    State: 'Gujarat',
    Latitude: 21.5174104,
    Longitude: 70.4642754,
  },
  167: {
    District: 'Kutch',
    State: 'Gujarat',
    Latitude: 23.583333,
    Longitude: 70,
  },
  168: {
    District: 'Kheda',
    State: 'Gujarat',
    Latitude: 22.75,
    Longitude: 72.833333,
  },
  169: {
    District: 'Mehsana',
    State: 'Gujarat',
    Latitude: 23.601262849999998,
    Longitude: 72.37415155167554,
  },
  170: {
    District: 'Mahisagar',
    State: 'Gujarat',
    Latitude: 23.1916967,
    Longitude: 73.6626352964019,
  },
  171: {
    District: 'Morbi',
    State: 'Gujarat',
    Latitude: 22.8176662,
    Longitude: 70.8345928,
  },
  172: {
    District: 'Narmada',
    State: 'Gujarat',
    Latitude: 21.738303950000002,
    Longitude: 73.62736015921328,
  },
  173: {
    District: 'Navsari',
    State: 'Gujarat',
    Latitude: 20.952407,
    Longitude: 72.9323831,
  },
  174: {
    District: 'Panchmahal',
    State: 'Gujarat',
    Latitude: 22.7730778,
    Longitude: 73.6255049,
  },
  175: {
    District: 'Patan',
    State: 'Gujarat',
    Latitude: 23.77405735,
    Longitude: 71.68373465668734,
  },
  176: {
    District: 'Porbandar',
    State: 'Gujarat',
    Latitude: 21.6409,
    Longitude: 69.611,
  },
  177: {
    District: 'Rajkot',
    State: 'Gujarat',
    Latitude: 22.3051991,
    Longitude: 70.8028335,
  },
  178: {
    District: 'Sabarkantha',
    State: 'Gujarat',
    Latitude: 24.0294885,
    Longitude: 73.0459884,
  },
  179: {
    District: 'Surat',
    State: 'Gujarat',
    Latitude: 21.1864607,
    Longitude: 72.8081281,
  },
  180: {
    District: 'Surendranagar',
    State: 'Gujarat',
    Latitude: 22.75,
    Longitude: 71.666667,
  },
  181: {
    District: 'Tapi',
    State: 'Gujarat',
    Latitude: 21.1909141,
    Longitude: 73.55541085745186,
  },
  182: {
    District: 'Dang',
    State: 'Gujarat',
    Latitude: 20.6942515,
    Longitude: 73.5703741,
  },
  183: {
    District: 'Vadodara',
    State: 'Gujarat',
    Latitude: 22.2973142,
    Longitude: 73.1942567,
  },
  184: {
    District: 'Valsad',
    State: 'Gujarat',
    Latitude: 20.4324018,
    Longitude: 73.1411715553577,
  },
  185: {
    District: 'Ambala',
    State: 'Haryana',
    Latitude: 30.3843674,
    Longitude: 76.770421,
  },
  186: {
    District: 'Bhiwani',
    State: 'Haryana',
    Latitude: 28.7931703,
    Longitude: 76.1391283,
  },
  187: {
    District: 'Charkhi Dadri',
    State: 'Haryana',
    Latitude: 28.5919933,
    Longitude: 76.2719817,
  },
  188: {
    District: 'Faridabad',
    State: 'Haryana',
    Latitude: 28.402837,
    Longitude: 77.3085626,
  },
  189: {
    District: 'Fatehabad',
    State: 'Haryana',
    Latitude: 29.468830099999998,
    Longitude: 75.52107146631747,
  },
  190: {
    District: 'Gurugram',
    State: 'Haryana',
    Latitude: 28.4646148,
    Longitude: 77.0299194,
  },
  191: {
    District: 'Hisar',
    State: 'Haryana',
    Latitude: 29.168807,
    Longitude: 75.7461103,
  },
  192: {
    District: 'Jhajjar',
    State: 'Haryana',
    Latitude: 28.5336844,
    Longitude: 76.68981212035648,
  },
  193: {
    District: 'Jind',
    State: 'Haryana',
    Latitude: 29.5,
    Longitude: 76.25,
  },
  194: {
    District: 'Kaithal',
    State: 'Haryana',
    Latitude: 29.74477075,
    Longitude: 76.35092772284784,
  },
  195: {
    District: 'Karnal',
    State: 'Haryana',
    Latitude: 29.6803266,
    Longitude: 76.9896254,
  },
  196: {
    District: 'Kurukshetra',
    State: 'Haryana',
    Latitude: 29.9693747,
    Longitude: 76.8482787,
  },
  197: {
    District: 'Mahendragarh',
    State: 'Haryana',
    Latitude: 28.25,
    Longitude: 76.166667,
  },
  198: {
    District: 'Nuh',
    State: 'Haryana',
    Latitude: 28.097345150000002,
    Longitude: 77.05085582101852,
  },
  199: {
    District: 'Palwal',
    State: 'Haryana',
    Latitude: 28.12502575,
    Longitude: 77.35831300773046,
  },
  200: {
    District: 'Panchkula',
    State: 'Haryana',
    Latitude: 30.616216450000003,
    Longitude: 77.04197804321875,
  },
  201: {
    District: 'Panipat',
    State: 'Haryana',
    Latitude: 29.3912753,
    Longitude: 76.9771675,
  },
  202: {
    District: 'Rewari',
    State: 'Haryana',
    Latitude: 28.1956468,
    Longitude: 76.6165179,
  },
  203: {
    District: 'Rohtak',
    State: 'Haryana',
    Latitude: 28.9010899,
    Longitude: 76.5801935,
  },
  204: {
    District: 'Sirsa',
    State: 'Haryana',
    Latitude: 29.583333,
    Longitude: 75.083333,
  },
  205: {
    District: 'Sonipat',
    State: 'Haryana',
    Latitude: 29.0033144,
    Longitude: 77.0167323,
  },
  206: {
    District: 'Yamunanagar',
    State: 'Haryana',
    Latitude: 30.2112003,
    Longitude: 77.28638972360895,
  },
  207: {
    District: 'Bilaspur',
    State: 'Himachal Pradesh',
    Latitude: 31.3380959,
    Longitude: 76.7611631,
  },
  208: {
    District: 'Chamba',
    State: 'Himachal Pradesh',
    Latitude: 32.5,
    Longitude: 76.5,
  },
  209: {
    District: 'Hamirpur',
    State: 'Himachal Pradesh',
    Latitude: 31.7491333,
    Longitude: 76.5036832,
  },
  210: {
    District: 'Kangra',
    State: 'Himachal Pradesh',
    Latitude: 32.166667,
    Longitude: 76.25,
  },
  211: {
    District: 'Kinnaur',
    State: 'Himachal Pradesh',
    Latitude: 31.586346,
    Longitude: 78.3968441,
  },
  212: {
    District: 'Kullu',
    State: 'Himachal Pradesh',
    Latitude: 32.00186325,
    Longitude: 77.37899639741332,
  },
  213: {
    District: 'Lahaul and Spiti',
    State: 'Himachal Pradesh',
    Latitude: 32.5038495,
    Longitude: 77.58227188236428,
  },
  214: {
    District: 'Mandi',
    State: 'Himachal Pradesh',
    Latitude: 31.6723392,
    Longitude: 76.95331690779145,
  },
  215: {
    District: 'Shimla',
    State: 'Himachal Pradesh',
    Latitude: 31.1041526,
    Longitude: 77.1709729,
  },
  216: {
    District: 'Sirmaur',
    State: 'Himachal Pradesh',
    Latitude: 30.75,
    Longitude: 77.5,
  },
  217: {
    District: 'Solan',
    State: 'Himachal Pradesh',
    Latitude: 30.92589585,
    Longitude: 77.08200509063624,
  },
  218: {
    District: 'Una',
    State: 'Himachal Pradesh',
    Latitude: 31.583333,
    Longitude: 76.25,
  },
  219: {
    District: 'Anantnag',
    State: 'Jammu and Kashmir',
    Latitude: 33.746109950000005,
    Longitude: 75.18544753143254,
  },
  220: {
    District: 'Budgam',
    State: 'Jammu and Kashmir',
    Latitude: 34.04796585,
    Longitude: 74.7441397838328,
  },
  221: {
    District: 'Bandipora',
    State: 'Jammu and Kashmir',
    Latitude: 34.4563234,
    Longitude: 75.18344578242946,
  },
  222: {
    District: 'Baramulla',
    State: 'Jammu and Kashmir',
    Latitude: 34.205005650000004,
    Longitude: 74.36221081111597,
  },
  223: {
    District: 'Doda',
    State: 'Jammu and Kashmir',
    Latitude: 33.1774307,
    Longitude: 75.56752281893789,
  },
  224: {
    District: 'Ganderbal',
    State: 'Jammu and Kashmir',
    Latitude: 34.2880611,
    Longitude: 75.03058171219789,
  },
  225: {
    District: 'Jammu',
    State: 'Jammu and Kashmir',
    Latitude: 32.7185614,
    Longitude: 74.8580917,
  },
  226: {
    District: 'Kathua',
    State: 'Jammu and Kashmir',
    Latitude: 32.583333,
    Longitude: 75.5,
  },
  227: {
    District: 'Kishtwar',
    State: 'Jammu and Kashmir',
    Latitude: 33.2761171,
    Longitude: 75.8169238781403,
  },
  228: {
    District: 'Kulgam',
    State: 'Jammu and Kashmir',
    Latitude: 33.669800550000005,
    Longitude: 75.01480232217389,
  },
  229: {
    District: 'Kupwara',
    State: 'Jammu and Kashmir',
    Latitude: 34.611023599999996,
    Longitude: 74.238478667319,
  },
  230: {
    District: 'Pulwama',
    State: 'Jammu and Kashmir',
    Latitude: 33.89829355,
    Longitude: 74.89634093792017,
  },
  231: {
    District: 'Punch',
    State: 'Jammu and Kashmir',
    Latitude: 33.702939,
    Longitude: 74.24990151547188,
  },
  232: {
    District: 'Rajouri',
    State: 'Jammu and Kashmir',
    Latitude: 33.3772495,
    Longitude: 74.3132332,
  },
  233: {
    District: 'Ramban',
    State: 'Jammu and Kashmir',
    Latitude: 33.211637100000004,
    Longitude: 75.20509890752818,
  },
  234: {
    District: 'Reasi',
    State: 'Jammu and Kashmir',
    Latitude: 33.069103150000004,
    Longitude: 74.8378698208889,
  },
  235: {
    District: 'Samba',
    State: 'Jammu and Kashmir',
    Latitude: 32.57591175,
    Longitude: 75.12034455530063,
  },
  236: {
    District: 'Srinagar',
    State: 'Jammu and Kashmir',
    Latitude: 34.0747444,
    Longitude: 74.8204443,
  },
  237: {
    District: 'Udhampur',
    State: 'Jammu and Kashmir',
    Latitude: 33,
    Longitude: 75.166667,
  },
  238: {
    District: 'Bokaro',
    State: 'Jharkhand',
    Latitude: 23.699127949999998,
    Longitude: 85.99106894165021,
  },
  239: {
    District: 'Chatra',
    State: 'Jharkhand',
    Latitude: 24.20162495,
    Longitude: 84.87817691941733,
  },
  240: {
    District: 'Deoghar',
    State: 'Jharkhand',
    Latitude: 24.4766423,
    Longitude: 86.60673245386945,
  },
  241: {
    District: 'Dhanbad',
    State: 'Jharkhand',
    Latitude: 23.7952809,
    Longitude: 86.4309638,
  },
  242: {
    District: 'Dumka',
    State: 'Jharkhand',
    Latitude: 24.2538512,
    Longitude: 87.30064714192224,
  },
  243: {
    District: 'Garhwa',
    State: 'Jharkhand',
    Latitude: 24.15529035,
    Longitude: 83.82522584408349,
  },
  244: {
    District: 'Giridih',
    State: 'Jharkhand',
    Latitude: 24.25,
    Longitude: 85.916667,
  },
  245: {
    District: 'Godda',
    State: 'Jharkhand',
    Latitude: 24.74334305,
    Longitude: 87.29285061796858,
  },
  246: {
    District: 'Gumla',
    State: 'Jharkhand',
    Latitude: 23.0916741,
    Longitude: 84.5738480719802,
  },
  247: {
    District: 'Hazaribagh',
    State: 'Jharkhand',
    Latitude: 23.9675151,
    Longitude: 85.43884568595615,
  },
  248: {
    District: 'Jamtara',
    State: 'Jharkhand',
    Latitude: 23.9232867,
    Longitude: 86.77353493891458,
  },
  249: {
    District: 'Khunti',
    State: 'Jharkhand',
    Latitude: 23.10018105,
    Longitude: 85.3454593617985,
  },
  250: {
    District: 'Koderma',
    State: 'Jharkhand',
    Latitude: 24.4931239,
    Longitude: 85.55608107203881,
  },
  251: {
    District: 'Latehar',
    State: 'Jharkhand',
    Latitude: 23.74186545,
    Longitude: 84.51301366522105,
  },
  252: {
    District: 'Lohardaga',
    State: 'Jharkhand',
    Latitude: 23.46920055,
    Longitude: 84.73568423071751,
  },
  253: {
    District: 'Pakur',
    State: 'Jharkhand',
    Latitude: 24.6379064,
    Longitude: 87.8556962,
  },
  254: {
    District: 'Palamu',
    State: 'Jharkhand',
    Latitude: 23.916667,
    Longitude: 84.083333,
  },
  255: {
    District: 'West Singhbhum',
    State: 'Jharkhand',
    Latitude: 22.7859232,
    Longitude: 86.1716093,
  },
  256: {
    District: 'East Singhbhum',
    State: 'Jharkhand',
    Latitude: 22.5,
    Longitude: 85.5,
  },
  257: {
    District: 'Ramgarh',
    State: 'Jharkhand',
    Latitude: 23.598775949999997,
    Longitude: 85.53691564663127,
  },
  258: {
    District: 'Ranchi',
    State: 'Jharkhand',
    Latitude: 23.3700354,
    Longitude: 85.3250132,
  },
  259: {
    District: 'Sahibganj',
    State: 'Jharkhand',
    Latitude: 25.2820998,
    Longitude: 87.61850784289338,
  },
  260: {
    District: 'Saraikela-Kharsawan',
    State: 'Jharkhand',
    Latitude: 22.7464225,
    Longitude: 85.91689291046393,
  },
  261: {
    District: 'Simdega',
    State: 'Jharkhand',
    Latitude: 22.6664325,
    Longitude: 84.5502679119221,
  },
  262: {
    District: 'Bagalkote',
    State: 'Karnataka',
    Latitude: 16.1853166,
    Longitude: 75.6967919,
  },
  263: {
    District: 'Ballari',
    State: 'Karnataka',
    Latitude: 15.2485413,
    Longitude: 76.8323648,
  },
  264: {
    District: 'Belagavi',
    State: 'Karnataka',
    Latitude: 15.8572666,
    Longitude: 74.5069343,
  },
  265: {
    District: 'Bengaluru Urban',
    State: 'Karnataka',
    Latitude: 12.94514225,
    Longitude: 77.55364499971128,
  },
  266: {
    District: 'Bengaluru Rural',
    State: 'Karnataka',
    Latitude: 13.18077825,
    Longitude: 77.34174236923371,
  },
  267: {
    District: 'Bidar',
    State: 'Karnataka',
    Latitude: 18.083333,
    Longitude: 77.333333,
  },
  268: {
    District: 'Chamarajanagara',
    State: 'Karnataka',
    Latitude: 11.9238058,
    Longitude: 76.9393558,
  },
  269: {
    District: 'Chikkaballapura',
    State: 'Karnataka',
    Latitude: 13.4358702,
    Longitude: 77.7312434,
  },
  270: {
    District: 'Chikkamagaluru',
    State: 'Karnataka',
    Latitude: 13.5,
    Longitude: 75.5,
  },
  271: {
    District: 'Chitradurga',
    State: 'Karnataka',
    Latitude: 14.2266443,
    Longitude: 76.4005122,
  },
  272: {
    District: 'Dakshina Kannada',
    State: 'Karnataka',
    Latitude: 12.82225975,
    Longitude: 75.22560110530964,
  },
  273: {
    District: 'Davanagere',
    State: 'Karnataka',
    Latitude: 14.4661266,
    Longitude: 75.9206361,
  },
  274: {
    District: 'Dharwad',
    State: 'Karnataka',
    Latitude: 15.4540505,
    Longitude: 75.0066516,
  },
  275: {
    District: 'Gadag',
    State: 'Karnataka',
    Latitude: 15.4263647,
    Longitude: 75.6300786,
  },
  276: {
    District: 'Hassan',
    State: 'Karnataka',
    Latitude: 13.0070817,
    Longitude: 76.0992703,
  },
  277: {
    District: 'Haveri',
    State: 'Karnataka',
    Latitude: 14.7874825,
    Longitude: 75.3996731,
  },
  278: {
    District: 'Kalaburagi',
    State: 'Karnataka',
    Latitude: 17.166667,
    Longitude: 77.083333,
  },
  279: {
    District: 'Kodagu',
    State: 'Karnataka',
    Latitude: 12.3822808,
    Longitude: 75.66523533586208,
  },
  280: {
    District: 'Kolar',
    State: 'Karnataka',
    Latitude: 13.1369996,
    Longitude: 78.1339606,
  },
  281: {
    District: 'Koppal',
    State: 'Karnataka',
    Latitude: 15.3484144,
    Longitude: 76.1547421,
  },
  282: {
    District: 'Mandya',
    State: 'Karnataka',
    Latitude: 12.5238888,
    Longitude: 76.8961961,
  },
  283: {
    District: 'Mysuru',
    State: 'Karnataka',
    Latitude: 12.3051828,
    Longitude: 76.6553609,
  },
  284: {
    District: 'Raichur',
    State: 'Karnataka',
    Latitude: 16.083333,
    Longitude: 77.166667,
  },
  285: {
    District: 'Ramanagara',
    State: 'Karnataka',
    Latitude: 15.422047,
    Longitude: 74.4900863,
  },
  286: {
    District: 'Shivamogga',
    State: 'Karnataka',
    Latitude: 13.9311723,
    Longitude: 75.569737,
  },
  287: {
    District: 'Tumakuru',
    State: 'Karnataka',
    Latitude: 13.3400771,
    Longitude: 77.1006208,
  },
  288: {
    District: 'Udupi',
    State: 'Karnataka',
    Latitude: 13.3419169,
    Longitude: 74.7473232,
  },
  289: {
    District: 'Uttara Kannada',
    State: 'Karnataka',
    Latitude: 14.724474149999999,
    Longitude: 74.64223734496612,
  },
  290: {
    District: 'Vijayapura',
    State: 'Karnataka',
    Latitude: 16.666667,
    Longitude: 75.916667,
  },
  291: {
    District: 'Yadgir',
    State: 'Karnataka',
    Latitude: 16.7689044,
    Longitude: 77.1380381,
  },
  292: {
    District: 'Alappuzha',
    State: 'Kerala',
    Latitude: 9.48818445,
    Longitude: 76.4126940376799,
  },
  293: {
    District: 'Ernakulam',
    State: 'Kerala',
    Latitude: 9.9825665,
    Longitude: 76.2990313,
  },
  294: {
    District: 'Idukki',
    State: 'Kerala',
    Latitude: 9.8497872,
    Longitude: 76.9797914,
  },
  295: {
    District: 'Kannur',
    State: 'Kerala',
    Latitude: 11.8762254,
    Longitude: 75.3738043,
  },
  296: {
    District: 'Kasaragod',
    State: 'Kerala',
    Latitude: 12.421713050000001,
    Longitude: 75.19044977266321,
  },
  297: {
    District: 'Kollam',
    State: 'Kerala',
    Latitude: 8.8879509,
    Longitude: 76.5955013,
  },
  298: {
    District: 'Kottayam',
    State: 'Kerala',
    Latitude: 9.62857045,
    Longitude: 76.6455250291479,
  },
  299: {
    District: 'Kozhikode',
    State: 'Kerala',
    Latitude: 11.2446144,
    Longitude: 75.7759372,
  },
  300: {
    District: 'Malappuram',
    State: 'Kerala',
    Latitude: 11.10684475,
    Longitude: 76.10995510466662,
  },
  301: {
    District: 'Palakkad',
    State: 'Kerala',
    Latitude: 10.7691989,
    Longitude: 76.6512469,
  },
  302: {
    District: 'Pathanamthitta',
    State: 'Kerala',
    Latitude: 9.283404399999998,
    Longitude: 76.96066275907359,
  },
  303: {
    District: 'Thiruvananthapuram',
    State: 'Kerala',
    Latitude: 8.5241122,
    Longitude: 76.9360573,
  },
  304: {
    District: 'Thrissur',
    State: 'Kerala',
    Latitude: 10.5256264,
    Longitude: 76.2132542,
  },
  305: {
    District: 'Wayanad',
    State: 'Kerala',
    Latitude: 11.715219000000001,
    Longitude: 76.12690294658198,
  },
  306: {
    District: 'Kargil',
    State: 'Ladakh',
    Latitude: 34.42089435,
    Longitude: 75.66548598121861,
  },
  307: {
    District: 'Leh',
    State: 'Ladakh',
    Latitude: 34.1642029,
    Longitude: 77.5848133,
  },
  308: {
    District: 'Lakshadweep',
    State: 'Lakshadweep',
    Latitude: 10.8658832,
    Longitude: 72.1945002,
  },
  309: {
    District: 'Agar Malwa',
    State: 'Madhya Pradesh',
    Latitude: 23.9342963,
    Longitude: 76.14523314122312,
  },
  310: {
    District: 'Alirajpur',
    State: 'Madhya Pradesh',
    Latitude: 22.285939550000002,
    Longitude: 74.35468608752092,
  },
  311: {
    District: 'Anuppur',
    State: 'Madhya Pradesh',
    Latitude: 23.03525965,
    Longitude: 81.3884438474638,
  },
  312: {
    District: 'Ashoknagar',
    State: 'Madhya Pradesh',
    Latitude: 24.576189,
    Longitude: 77.7302895,
  },
  313: {
    District: 'Balaghat',
    State: 'Madhya Pradesh',
    Latitude: 21.966667,
    Longitude: 80.333333,
  },
  314: {
    District: 'Barwani',
    State: 'Madhya Pradesh',
    Latitude: 21.75194325,
    Longitude: 74.89175175338488,
  },
  315: {
    District: 'Betul',
    State: 'Madhya Pradesh',
    Latitude: 21.8796162,
    Longitude: 77.87568124563079,
  },
  316: {
    District: 'Bhind',
    State: 'Madhya Pradesh',
    Latitude: 26.5,
    Longitude: 78.75,
  },
  317: {
    District: 'Bhopal',
    State: 'Madhya Pradesh',
    Latitude: 23.2584857,
    Longitude: 77.401989,
  },
  318: {
    District: 'Burhanpur',
    State: 'Madhya Pradesh',
    Latitude: 21.3118839,
    Longitude: 76.2291992,
  },
  319: {
    District: 'Chhatarpur',
    State: 'Madhya Pradesh',
    Latitude: 24.75,
    Longitude: 79.75,
  },
  320: {
    District: 'Chhindwara',
    State: 'Madhya Pradesh',
    Latitude: 22.139831049999998,
    Longitude: 78.80964495467987,
  },
  321: {
    District: 'Damoh',
    State: 'Madhya Pradesh',
    Latitude: 23.75,
    Longitude: 79.583333,
  },
  322: {
    District: 'Datia',
    State: 'Madhya Pradesh',
    Latitude: 25.75,
    Longitude: 78.5,
  },
  323: {
    District: 'Dewas',
    State: 'Madhya Pradesh',
    Latitude: 23,
    Longitude: 76.166667,
  },
  324: {
    District: 'Dhar',
    State: 'Madhya Pradesh',
    Latitude: 22.5,
    Longitude: 75.25,
  },
  325: {
    District: 'Dindori',
    State: 'Madhya Pradesh',
    Latitude: 22.907368650000002,
    Longitude: 80.88511429688029,
  },
  326: {
    District: 'Khandwa',
    State: 'Madhya Pradesh',
    Latitude: 21.9778642,
    Longitude: 76.5688282326971,
  },
  327: {
    District: 'Guna',
    State: 'Madhya Pradesh',
    Latitude: 24.5,
    Longitude: 77.5,
  },
  328: {
    District: 'Gwalior',
    State: 'Madhya Pradesh',
    Latitude: 26.2037247,
    Longitude: 78.1573628,
  },
  329: {
    District: 'Harda',
    State: 'Madhya Pradesh',
    Latitude: 22.3388828,
    Longitude: 77.0929933,
  },
  330: {
    District: 'Hoshangabad',
    State: 'Madhya Pradesh',
    Latitude: 22.6001502,
    Longitude: 77.92664521413192,
  },
  331: {
    District: 'Indore',
    State: 'Madhya Pradesh',
    Latitude: 22.7203616,
    Longitude: 75.8681996,
  },
  332: {
    District: 'Jabalpur',
    State: 'Madhya Pradesh',
    Latitude: 23.1608938,
    Longitude: 79.9497702,
  },
  333: {
    District: 'Jhabua',
    State: 'Madhya Pradesh',
    Latitude: 22.88585225,
    Longitude: 74.72513368804519,
  },
  334: {
    District: 'Katni',
    State: 'Madhya Pradesh',
    Latitude: 23.8339621,
    Longitude: 80.392456,
  },
  335: {
    District: 'Mandla',
    State: 'Madhya Pradesh',
    Latitude: 22.68536625,
    Longitude: 80.58150561711888,
  },
  336: {
    District: 'Mandsaur',
    State: 'Madhya Pradesh',
    Latitude: 24.2651306,
    Longitude: 75.38718193725012,
  },
  337: {
    District: 'Morena',
    State: 'Madhya Pradesh',
    Latitude: 26.166667,
    Longitude: 77.5,
  },
  338: {
    District: 'Narsinghpur',
    State: 'Madhya Pradesh',
    Latitude: 22.9467047,
    Longitude: 79.1980228,
  },
  339: {
    District: 'Neemuch',
    State: 'Madhya Pradesh',
    Latitude: 24.63044655,
    Longitude: 75.18339614635457,
  },
  340: {
    District: 'Niwari',
    State: 'Madhya Pradesh',
    Latitude: 25.312470400000002,
    Longitude: 78.66785016924982,
  },
  341: {
    District: 'Panna',
    State: 'Madhya Pradesh',
    Latitude: 24.5,
    Longitude: 80.25,
  },
  342: {
    District: 'Raisen',
    State: 'Madhya Pradesh',
    Latitude: 23.25,
    Longitude: 78.083333,
  },
  343: {
    District: 'Rajgarh',
    State: 'Madhya Pradesh',
    Latitude: 23.87167135,
    Longitude: 76.7748902040889,
  },
  344: {
    District: 'Ratlam',
    State: 'Madhya Pradesh',
    Latitude: 23.501957750000003,
    Longitude: 74.95284518680097,
  },
  345: {
    District: 'Rewa',
    State: 'Madhya Pradesh',
    Latitude: 24.75926685,
    Longitude: 81.65500021078341,
  },
  346: {
    District: 'Sagar',
    State: 'Madhya Pradesh',
    Latitude: 23.80961225,
    Longitude: 78.75911360578634,
  },
  347: {
    District: 'Satna',
    State: 'Madhya Pradesh',
    Latitude: 24.5,
    Longitude: 81,
  },
  348: {
    District: 'Sehore',
    State: 'Madhya Pradesh',
    Latitude: 23.1156882,
    Longitude: 77.06623939176504,
  },
  349: {
    District: 'Seoni',
    State: 'Madhya Pradesh',
    Latitude: 22.275878900000002,
    Longitude: 79.721044651047,
  },
  350: {
    District: 'Shahdol',
    State: 'Madhya Pradesh',
    Latitude: 23.3002343,
    Longitude: 81.364771,
  },
  351: {
    District: 'Shajapur',
    State: 'Madhya Pradesh',
    Latitude: 23.37074105,
    Longitude: 76.62051527475785,
  },
  352: {
    District: 'Sheopur',
    State: 'Madhya Pradesh',
    Latitude: 25.6656611,
    Longitude: 76.6954843,
  },
  353: {
    District: 'Shivpuri',
    State: 'Madhya Pradesh',
    Latitude: 25.37524125,
    Longitude: 77.82811932629714,
  },
  354: {
    District: 'Sidhi',
    State: 'Madhya Pradesh',
    Latitude: 24.25,
    Longitude: 82,
  },
  355: {
    District: 'Singrauli',
    State: 'Madhya Pradesh',
    Latitude: 24.1974432,
    Longitude: 82.6661453,
  },
  356: {
    District: 'Tikamgarh',
    State: 'Madhya Pradesh',
    Latitude: 24.85450275,
    Longitude: 79.04698123882801,
  },
  357: {
    District: 'Ujjain',
    State: 'Madhya Pradesh',
    Latitude: 23.174597,
    Longitude: 75.7851423,
  },
  358: {
    District: 'Umaria',
    State: 'Madhya Pradesh',
    Latitude: 23.64319305,
    Longitude: 80.94239522009255,
  },
  359: {
    District: 'Vidisha',
    State: 'Madhya Pradesh',
    Latitude: 23.916667,
    Longitude: 78,
  },
  360: {
    District: 'Khargone',
    State: 'Madhya Pradesh',
    Latitude: 21.8187743,
    Longitude: 75.6064577,
  },
  361: {
    District: 'Ahmednagar',
    State: 'Maharashtra',
    Latitude: 19.162772500000003,
    Longitude: 74.85802430085195,
  },
  362: {
    District: 'Akola',
    State: 'Maharashtra',
    Latitude: 20.7618624,
    Longitude: 77.19217162524623,
  },
  363: {
    District: 'Amravati',
    State: 'Maharashtra',
    Latitude: 21.15454115,
    Longitude: 77.64429617998744,
  },
  364: {
    District: 'Aurangabad',
    State: 'Maharashtra',
    Latitude: 19.877263,
    Longitude: 75.3390241,
  },
  365: {
    District: 'Bhandara',
    State: 'Maharashtra',
    Latitude: 21.122793299999998,
    Longitude: 79.79430286865282,
  },
  366: {
    District: 'Beed',
    State: 'Maharashtra',
    Latitude: 18.9904059,
    Longitude: 75.7542291,
  },
  367: {
    District: 'Buldhana',
    State: 'Maharashtra',
    Latitude: 20.583333,
    Longitude: 76.416667,
  },
  368: {
    District: 'Chandrapur',
    State: 'Maharashtra',
    Latitude: 20,
    Longitude: 80,
  },
  369: {
    District: 'Dhule',
    State: 'Maharashtra',
    Latitude: 21.13050145,
    Longitude: 74.47891180551228,
  },
  370: {
    District: 'Gadchiroli',
    State: 'Maharashtra',
    Latitude: 19.759070350000002,
    Longitude: 80.16228072580182,
  },
  371: {
    District: 'Gondia',
    State: 'Maharashtra',
    Latitude: 21.455228,
    Longitude: 80.1962729,
  },
  372: {
    District: 'Hingoli',
    State: 'Maharashtra',
    Latitude: 19.54140965,
    Longitude: 77.17376601317515,
  },
  373: {
    District: 'Jalgaon',
    State: 'Maharashtra',
    Latitude: 20.84351185,
    Longitude: 75.52592658756026,
  },
  374: {
    District: 'Jalna',
    State: 'Maharashtra',
    Latitude: 19.9182328,
    Longitude: 75.8686246900443,
  },
  375: {
    District: 'Kolhapur',
    State: 'Maharashtra',
    Latitude: 16.7028412,
    Longitude: 74.2405329,
  },
  376: {
    District: 'Latur',
    State: 'Maharashtra',
    Latitude: 18.35146855,
    Longitude: 76.7551212230513,
  },
  377: {
    District: 'Mumbai',
    State: 'Maharashtra',
    Latitude: 19.0759899,
    Longitude: 72.8773928,
  },
  378: {
    District: 'Mumbai Suburban',
    State: 'Maharashtra',
    Latitude: 19.13095765,
    Longitude: 72.88593095460952,
  },
  379: {
    District: 'Nagpur',
    State: 'Maharashtra',
    Latitude: 21.1498134,
    Longitude: 79.0820556,
  },
  380: {
    District: 'Nanded',
    State: 'Maharashtra',
    Latitude: 19.09400875,
    Longitude: 77.48319215130235,
  },
  381: {
    District: 'Nandurbar',
    State: 'Maharashtra',
    Latitude: 21.365998949999998,
    Longitude: 74.28400358178766,
  },
  382: {
    District: 'Nashik',
    State: 'Maharashtra',
    Latitude: 20.0112475,
    Longitude: 73.7902364,
  },
  383: {
    District: 'Osmanabad',
    State: 'Maharashtra',
    Latitude: 18.16984395,
    Longitude: 76.11796321159572,
  },
  384: {
    District: 'Palghar',
    State: 'Maharashtra',
    Latitude: 19.68086385,
    Longitude: 72.82537342511341,
  },
  385: {
    District: 'Parbhani',
    State: 'Maharashtra',
    Latitude: 19.29031365,
    Longitude: 76.60290343431203,
  },
  386: {
    District: 'Pune',
    State: 'Maharashtra',
    Latitude: 18.521428,
    Longitude: 73.8544541,
  },
  387: {
    District: 'Raigad',
    State: 'Maharashtra',
    Latitude: 18.4928092,
    Longitude: 73.13807095426539,
  },
  388: {
    District: 'Ratnagiri',
    State: 'Maharashtra',
    Latitude: 17.282607900000002,
    Longitude: 73.4569787039826,
  },
  389: {
    District: 'Sangli',
    State: 'Maharashtra',
    Latitude: 16.8502534,
    Longitude: 74.5948885,
  },
  390: {
    District: 'Satara',
    State: 'Maharashtra',
    Latitude: 17.63612885,
    Longitude: 74.29827807601782,
  },
  391: {
    District: 'Sindhudurg',
    State: 'Maharashtra',
    Latitude: 16.135719299999998,
    Longitude: 73.65220860183584,
  },
  392: {
    District: 'Solapur',
    State: 'Maharashtra',
    Latitude: 17.84990665,
    Longitude: 75.27632027348457,
  },
  393: {
    District: 'Thane',
    State: 'Maharashtra',
    Latitude: 19.1943294,
    Longitude: 72.9701779,
  },
  394: {
    District: 'Wardha',
    State: 'Maharashtra',
    Latitude: 20.82562315,
    Longitude: 78.61314549522919,
  },
  395: {
    District: 'Washim',
    State: 'Maharashtra',
    Latitude: 20.28792095,
    Longitude: 77.23606281061035,
  },
  396: {
    District: 'Yavatmal',
    State: 'Maharashtra',
    Latitude: 20.15,
    Longitude: 78.35,
  },
  397: {
    District: 'Bishnupur',
    State: 'Manipur',
    Latitude: 24.562463649999998,
    Longitude: 93.8012483746545,
  },
  398: {
    District: 'Chandel',
    State: 'Manipur',
    Latitude: 24.3197442,
    Longitude: 94.02109882254321,
  },
  399: {
    District: 'Churachandpur',
    State: 'Manipur',
    Latitude: 24.378704,
    Longitude: 93.69700149533944,
  },
  400: {
    District: 'Imphal East',
    State: 'Manipur',
    Latitude: 24.85154025,
    Longitude: 94.00947957721581,
  },
  401: {
    District: 'Imphal West',
    State: 'Manipur',
    Latitude: 24.757326,
    Longitude: 93.85847858025147,
  },
  402: {
    District: 'Jiribam',
    State: 'Manipur',
    Latitude: 24.6778472,
    Longitude: 93.1549000879473,
  },
  403: {
    District: 'Kakching',
    State: 'Manipur',
    Latitude: 24.38904015,
    Longitude: 93.88013239529906,
  },
  404: {
    District: 'Kamjong',
    State: 'Manipur',
    Latitude: 24.8409769,
    Longitude: 94.52830740954334,
  },
  405: {
    District: 'Kangpokpi',
    State: 'Manipur',
    Latitude: 25.1524326,
    Longitude: 93.9714932,
  },
  406: {
    District: 'Noney',
    State: 'Manipur',
    Latitude: 24.8625867,
    Longitude: 93.6237454,
  },
  407: {
    District: 'Pherzawl',
    State: 'Manipur',
    Latitude: 24.2595653,
    Longitude: 93.1906004,
  },
  408: {
    District: 'Senapati',
    State: 'Manipur',
    Latitude: 25.380439600000003,
    Longitude: 94.0569854178655,
  },
  409: {
    District: 'Tamenglong',
    State: 'Manipur',
    Latitude: 24.935401300000002,
    Longitude: 93.56791112289724,
  },
  410: {
    District: 'Tengnoupal',
    State: 'Manipur',
    Latitude: 24.31392145,
    Longitude: 94.23756082375633,
  },
  411: {
    District: 'Thoubal',
    State: 'Manipur',
    Latitude: 24.624587,
    Longitude: 94.04247928402684,
  },
  412: {
    District: 'Ukhrul',
    State: 'Manipur',
    Latitude: 25.109266849999997,
    Longitude: 94.38239281654197,
  },
  413: {
    District: 'East Garo Hills',
    State: 'Meghalaya',
    Latitude: 25.61849455,
    Longitude: 90.63421621777749,
  },
  414: {
    District: 'East Jaintia Hills',
    State: 'Meghalaya',
    Latitude: 25.25157605,
    Longitude: 92.48405006942016,
  },
  415: {
    District: 'East Khasi Hills',
    State: 'Meghalaya',
    Latitude: 25.405680850000003,
    Longitude: 91.83546771298455,
  },
  416: {
    District: 'North Garo Hills',
    State: 'Meghalaya',
    Latitude: 25.8619841,
    Longitude: 90.70177048839348,
  },
  417: {
    District: 'South Garo Hills',
    State: 'Meghalaya',
    Latitude: 25.347969,
    Longitude: 90.56577725964563,
  },
  418: {
    District: 'South West Garo Hills',
    State: 'Meghalaya',
    Latitude: 25.448052699999998,
    Longitude: 89.9987852968616,
  },
  419: {
    District: 'South West Khasi Hills',
    State: 'Meghalaya',
    Latitude: 25.330722100000003,
    Longitude: 91.32645013786319,
  },
  420: {
    District: 'West Garo Hills',
    State: 'Meghalaya',
    Latitude: 25.60780175,
    Longitude: 90.20380106122235,
  },
  421: {
    District: 'West Jaintia Hills',
    State: 'Meghalaya',
    Latitude: 25.4425965,
    Longitude: 92.29882747091773,
  },
  422: {
    District: 'West Khasi Hills',
    State: 'Meghalaya',
    Latitude: 25.58173695,
    Longitude: 91.28910306371017,
  },
  423: {
    District: 'Aizawl',
    State: 'Mizoram',
    Latitude: 23.7414092,
    Longitude: 92.7209297,
  },
  424: {
    District: 'Champhai',
    State: 'Mizoram',
    Latitude: 23.69082385,
    Longitude: 93.34839119913778,
  },
  425: {
    District: 'Kolasib',
    State: 'Mizoram',
    Latitude: 24.18947525,
    Longitude: 92.7133181281124,
  },
  426: {
    District: 'Lawngtlai',
    State: 'Mizoram',
    Latitude: 22.34596495,
    Longitude: 92.8119536068969,
  },
  427: {
    District: 'Lunglei',
    State: 'Mizoram',
    Latitude: 22.898553,
    Longitude: 92.75192291719874,
  },
  428: {
    District: 'Mamit',
    State: 'Mizoram',
    Latitude: 23.75590845,
    Longitude: 92.45173568830637,
  },
  429: {
    District: 'Saiha',
    State: 'Mizoram',
    Latitude: 22.4995518,
    Longitude: 92.97798988717027,
  },
  430: {
    District: 'Serchhip',
    State: 'Mizoram',
    Latitude: 23.385892300000002,
    Longitude: 92.930598908176,
  },
  431: {
    District: 'Dimapur',
    State: 'Nagaland',
    Latitude: 25.9135914,
    Longitude: 93.7283707,
  },
  432: {
    District: 'Kiphire',
    State: 'Nagaland',
    Latitude: 25.81551155,
    Longitude: 94.84166400470303,
  },
  433: {
    District: 'Kohima',
    State: 'Nagaland',
    Latitude: 25.75,
    Longitude: 94.166667,
  },
  434: {
    District: 'Longleng',
    State: 'Nagaland',
    Latitude: 26.49031725,
    Longitude: 94.77214247303138,
  },
  435: {
    District: 'Mokokchung',
    State: 'Nagaland',
    Latitude: 26.4795861,
    Longitude: 94.51052754768273,
  },
  436: {
    District: 'Mon',
    State: 'Nagaland',
    Latitude: 26.75,
    Longitude: 94.833333,
  },
  437: {
    District: 'Peren',
    State: 'Nagaland',
    Latitude: 25.47907705,
    Longitude: 93.72563659313207,
  },
  438: {
    District: 'Phek',
    State: 'Nagaland',
    Latitude: 25.75,
    Longitude: 94.5,
  },
  439: {
    District: 'Tuensang',
    State: 'Nagaland',
    Latitude: 26.168505500000002,
    Longitude: 94.85819821659115,
  },
  440: {
    District: 'Wokha',
    State: 'Nagaland',
    Latitude: 26.166667,
    Longitude: 94.25,
  },
  441: {
    District: 'Zunheboto',
    State: 'Nagaland',
    Latitude: 26,
    Longitude: 94.5,
  },
  442: {
    District: 'Angul',
    State: 'Odisha',
    Latitude: 20.8382426,
    Longitude: 85.0973949,
  },
  443: {
    District: 'Balangir',
    State: 'Odisha',
    Latitude: 20.75,
    Longitude: 83.25,
  },
  444: {
    District: 'Balasore',
    State: 'Odisha',
    Latitude: 21.5002888,
    Longitude: 86.9202627,
  },
  445: {
    District: 'Bargarh',
    State: 'Odisha',
    Latitude: 21.3474637,
    Longitude: 83.65427922282043,
  },
  446: {
    District: 'Boudh',
    State: 'Odisha',
    Latitude: 20.8415619,
    Longitude: 84.3213321,
  },
  447: {
    District: 'Bhadrak',
    State: 'Odisha',
    Latitude: 21.0633288,
    Longitude: 86.5053731,
  },
  448: {
    District: 'Cuttack',
    State: 'Odisha',
    Latitude: 20.4686,
    Longitude: 85.8792,
  },
  449: {
    District: 'Deogarh',
    State: 'Odisha',
    Latitude: 21.5370786,
    Longitude: 84.7301184,
  },
  450: {
    District: 'Dhenkanal',
    State: 'Odisha',
    Latitude: 20.75,
    Longitude: 85.5,
  },
  451: {
    District: 'Gajapati',
    State: 'Odisha',
    Latitude: 19.19557415,
    Longitude: 84.19297736346317,
  },
  452: {
    District: 'Ganjam',
    State: 'Odisha',
    Latitude: 19.5,
    Longitude: 84.5,
  },
  453: {
    District: 'Jagatsinghpur',
    State: 'Odisha',
    Latitude: 20.2593872,
    Longitude: 86.1660878,
  },
  454: {
    District: 'Jajpur',
    State: 'Odisha',
    Latitude: 20.8522696,
    Longitude: 86.3385714,
  },
  455: {
    District: 'Jharsuguda',
    State: 'Odisha',
    Latitude: 21.87705125,
    Longitude: 84.00905063735019,
  },
  456: {
    District: 'Kalahandi',
    State: 'Odisha',
    Latitude: 19.75,
    Longitude: 83,
  },
  457: {
    District: 'Kandhamal',
    State: 'Odisha',
    Latitude: 20.13069385,
    Longitude: 84.07904760590154,
  },
  458: {
    District: 'Kendrapara',
    State: 'Odisha',
    Latitude: 20.50040085,
    Longitude: 86.43170622796478,
  },
  459: {
    District: 'Kendujhar',
    State: 'Odisha',
    Latitude: 21.5892323,
    Longitude: 85.66878413736906,
  },
  460: {
    District: 'Khordha',
    State: 'Odisha',
    Latitude: 20.22564715,
    Longitude: 85.56059465125232,
  },
  461: {
    District: 'Koraput',
    State: 'Odisha',
    Latitude: 18.7232023,
    Longitude: 82.60811827787269,
  },
  462: {
    District: 'Malkangiri',
    State: 'Odisha',
    Latitude: 18.35835435,
    Longitude: 81.89823748747048,
  },
  463: {
    District: 'Mayurbhanj',
    State: 'Odisha',
    Latitude: 21.75,
    Longitude: 86.5,
  },
  464: {
    District: 'Nabarangapur',
    State: 'Odisha',
    Latitude: 19.60962325,
    Longitude: 82.29876854111501,
  },
  465: {
    District: 'Nayagarh',
    State: 'Odisha',
    Latitude: 20.1160666,
    Longitude: 85.11195643843573,
  },
  466: {
    District: 'Nuapada',
    State: 'Odisha',
    Latitude: 20.769099750000002,
    Longitude: 82.51862845874122,
  },
  467: {
    District: 'Puri',
    State: 'Odisha',
    Latitude: 19.8076083,
    Longitude: 85.8252538,
  },
  468: {
    District: 'Rayagada',
    State: 'Odisha',
    Latitude: 18.965998550000002,
    Longitude: 84.19287455014992,
  },
  469: {
    District: 'Sambalpur',
    State: 'Odisha',
    Latitude: 21.4,
    Longitude: 83.883333,
  },
  470: {
    District: 'Subarnapur',
    State: 'Odisha',
    Latitude: 19.08143,
    Longitude: 84.5144503,
  },
  471: {
    District: 'Sundargarh',
    State: 'Odisha',
    Latitude: 22.25,
    Longitude: 84.5,
  },
  472: {
    District: 'Karaikal',
    State: 'Puducherry',
    Latitude: 10.91571,
    Longitude: 79.8375761,
  },
  473: {
    District: 'Mahe',
    State: 'Puducherry',
    Latitude: 11.7021978,
    Longitude: 75.5364701,
  },
  474: {
    District: 'Puducherry',
    State: 'Puducherry',
    Latitude: 11.9340568,
    Longitude: 79.8306447,
  },
  475: {
    District: 'Yanam',
    State: 'Puducherry',
    Latitude: 16.7333666,
    Longitude: 82.2145164,
  },
  476: {
    District: 'Amritsar',
    State: 'Punjab',
    Latitude: 31.6343083,
    Longitude: 74.8736788,
  },
  477: {
    District: 'Barnala',
    State: 'Punjab',
    Latitude: 30.3704685,
    Longitude: 75.504017418548,
  },
  478: {
    District: 'Bathinda',
    State: 'Punjab',
    Latitude: 30.17911535,
    Longitude: 75.04710156312628,
  },
  479: {
    District: 'Faridkot',
    State: 'Punjab',
    Latitude: 30.60092505,
    Longitude: 74.79477422840449,
  },
  480: {
    District: 'Fatehgarh Sahib',
    State: 'Punjab',
    Latitude: 30.6600764,
    Longitude: 76.38002163710028,
  },
  481: {
    District: 'Fazilka',
    State: 'Punjab',
    Latitude: 30.336099599999997,
    Longitude: 74.11794319222481,
  },
  482: {
    District: 'Ferozepur',
    State: 'Punjab',
    Latitude: 30.6839733,
    Longitude: 76.3594033,
  },
  483: {
    District: 'Gurdaspur',
    State: 'Punjab',
    Latitude: 31.904229899999997,
    Longitude: 75.22738141098935,
  },
  484: {
    District: 'Hoshiarpur',
    State: 'Punjab',
    Latitude: 31.60857425,
    Longitude: 75.84644246890946,
  },
  485: {
    District: 'Jalandhar',
    State: 'Punjab',
    Latitude: 31.29201065,
    Longitude: 75.56805772253911,
  },
  486: {
    District: 'Kapurthala',
    State: 'Punjab',
    Latitude: 31.38524095,
    Longitude: 75.30552273989395,
  },
  487: {
    District: 'Ludhiana',
    State: 'Punjab',
    Latitude: 30.9090157,
    Longitude: 75.851601,
  },
  488: {
    District: 'Mansa',
    State: 'Punjab',
    Latitude: 29.8769971,
    Longitude: 75.4889866137018,
  },
  489: {
    District: 'Moga',
    State: 'Punjab',
    Latitude: 30.7839866,
    Longitude: 75.16057422541162,
  },
  490: {
    District: 'Pathankot',
    State: 'Punjab',
    Latitude: 32.301710400000005,
    Longitude: 75.65864246622084,
  },
  491: {
    District: 'Patiala',
    State: 'Punjab',
    Latitude: 30.2090874,
    Longitude: 76.3398720856221,
  },
  492: {
    District: 'Rupnagar',
    State: 'Punjab',
    Latitude: 31.09168085,
    Longitude: 76.5272673916138,
  },
  493: {
    District: 'S.A.S. Nagar',
    State: 'Punjab',
    Latitude: 30.8823935,
    Longitude: 75.8703501,
  },
  494: {
    District: 'Sangrur',
    State: 'Punjab',
    Latitude: 30.2093363,
    Longitude: 75.8184224340909,
  },
  495: {
    District: 'Sri Muktsar Sahib',
    State: 'Punjab',
    Latitude: 30.4692,
    Longitude: 74.5182,
  },
  496: {
    District: 'Tarn Taran',
    State: 'Punjab',
    Latitude: 31.32124525,
    Longitude: 74.84130629340785,
  },
  497: {
    District: 'Ajmer',
    State: 'Rajasthan',
    Latitude: 26.4691,
    Longitude: 74.639,
  },
  498: {
    District: 'Alwar',
    State: 'Rajasthan',
    Latitude: 27.639077049999997,
    Longitude: 76.6144524902045,
  },
  499: {
    District: 'Banswara',
    State: 'Rajasthan',
    Latitude: 23.4930788,
    Longitude: 74.34840231310622,
  },
  500: {
    District: 'Baran',
    State: 'Rajasthan',
    Latitude: 24.9171512,
    Longitude: 76.69640322489136,
  },
  501: {
    District: 'Barmer',
    State: 'Rajasthan',
    Latitude: 25.5819034,
    Longitude: 71.61966242777196,
  },
  502: {
    District: 'Bharatpur',
    State: 'Rajasthan',
    Latitude: 27.26521245,
    Longitude: 77.36912554739122,
  },
  503: {
    District: 'Bhilwara',
    State: 'Rajasthan',
    Latitude: 25.48877345,
    Longitude: 74.69961283584024,
  },
  504: {
    District: 'Bikaner',
    State: 'Rajasthan',
    Latitude: 28.0159286,
    Longitude: 73.3171367,
  },
  505: {
    District: 'Bundi',
    State: 'Rajasthan',
    Latitude: 25.5,
    Longitude: 75.833333,
  },
  506: {
    District: 'Chittorgarh',
    State: 'Rajasthan',
    Latitude: 24.718026000000002,
    Longitude: 74.47214697200876,
  },
  507: {
    District: 'Churu',
    State: 'Rajasthan',
    Latitude: 28.2061443,
    Longitude: 74.69190729963461,
  },
  508: {
    District: 'Dausa',
    State: 'Rajasthan',
    Latitude: 26.80486585,
    Longitude: 76.44374569929329,
  },
  509: {
    District: 'Dholpur',
    State: 'Rajasthan',
    Latitude: 26.7009896,
    Longitude: 77.8967857,
  },
  510: {
    District: 'Dungarpur',
    State: 'Rajasthan',
    Latitude: 23.666667,
    Longitude: 73.75,
  },
  511: {
    District: 'Ganganagar',
    State: 'Rajasthan',
    Latitude: 29.9049489,
    Longitude: 73.8792934139276,
  },
  512: {
    District: 'Hanumangarh',
    State: 'Rajasthan',
    Latitude: 29.367200150000002,
    Longitude: 74.29836365065901,
  },
  513: {
    District: 'Jaipur',
    State: 'Rajasthan',
    Latitude: 26.916194,
    Longitude: 75.820349,
  },
  514: {
    District: 'Jaisalmer',
    State: 'Rajasthan',
    Latitude: 27.02801615,
    Longitude: 70.7785056232077,
  },
  515: {
    District: 'Jalore',
    State: 'Rajasthan',
    Latitude: 25.3476006,
    Longitude: 72.6260916,
  },
  516: {
    District: 'Jhalawar',
    State: 'Rajasthan',
    Latitude: 24.3132368,
    Longitude: 76.52223626123003,
  },
  517: {
    District: 'Jhunjhunu',
    State: 'Rajasthan',
    Latitude: 28.1287995,
    Longitude: 75.3992581,
  },
  518: {
    District: 'Jodhpur',
    State: 'Rajasthan',
    Latitude: 26.2967719,
    Longitude: 73.0351433,
  },
  519: {
    District: 'Karauli',
    State: 'Rajasthan',
    Latitude: 26.51668105,
    Longitude: 77.05772976517363,
  },
  520: {
    District: 'Kota',
    State: 'Rajasthan',
    Latitude: 25.1968256,
    Longitude: 76.00089330885552,
  },
  521: {
    District: 'Nagaur',
    State: 'Rajasthan',
    Latitude: 27.0607859,
    Longitude: 74.17667537582712,
  },
  522: {
    District: 'Pali',
    State: 'Rajasthan',
    Latitude: 25.6040908,
    Longitude: 73.41560878556902,
  },
  523: {
    District: 'Pratapgarh',
    State: 'Rajasthan',
    Latitude: 24.0333495,
    Longitude: 74.7801315,
  },
  524: {
    District: 'Rajsamand',
    State: 'Rajasthan',
    Latitude: 25.29131615,
    Longitude: 73.8244924740361,
  },
  525: {
    District: 'Sawai Madhopur',
    State: 'Rajasthan',
    Latitude: 26.22914115,
    Longitude: 76.30453277017932,
  },
  526: {
    District: 'Sikar',
    State: 'Rajasthan',
    Latitude: 27.662826000000003,
    Longitude: 75.02792628691331,
  },
  527: {
    District: 'Sirohi',
    State: 'Rajasthan',
    Latitude: 24.811404699999997,
    Longitude: 72.83002573160249,
  },
  528: {
    District: 'Tonk',
    State: 'Rajasthan',
    Latitude: 26.12214725,
    Longitude: 75.66375373932236,
  },
  529: {
    District: 'Udaipur',
    State: 'Rajasthan',
    Latitude: 24.578721,
    Longitude: 73.6862571,
  },
  530: {
    District: 'East Sikkim',
    State: 'Sikkim',
    Latitude: 27.74891905,
    Longitude: 88.5214387098307,
  },
  531: {
    District: 'North Sikkim',
    State: 'Sikkim',
    Latitude: 27.74891905,
    Longitude: 88.5214387098307,
  },
  532: {
    District: 'South Sikkim',
    State: 'Sikkim',
    Latitude: 27.74891905,
    Longitude: 88.5214387098307,
  },
  533: {
    District: 'West Sikkim',
    State: 'Sikkim',
    Latitude: 27.3607071,
    Longitude: 88.18800245494259,
  },
  534: {
    District: 'Ariyalur',
    State: 'Tamil Nadu',
    Latitude: 11.076035950000001,
    Longitude: 79.11745538182738,
  },
  535: {
    District: 'Chennai',
    State: 'Tamil Nadu',
    Latitude: 13.0801721,
    Longitude: 80.2838331,
  },
  536: {
    District: 'Coimbatore',
    State: 'Tamil Nadu',
    Latitude: 11.0018115,
    Longitude: 76.9628425,
  },
  537: {
    District: 'Cuddalore',
    State: 'Tamil Nadu',
    Latitude: 11.74269375,
    Longitude: 79.75030644171935,
  },
  538: {
    District: 'Dharmapuri',
    State: 'Tamil Nadu',
    Latitude: 12.09680475,
    Longitude: 78.19304301026716,
  },
  539: {
    District: 'Dindigul',
    State: 'Tamil Nadu',
    Latitude: 10.3303299,
    Longitude: 78.0673979084697,
  },
  540: {
    District: 'Erode',
    State: 'Tamil Nadu',
    Latitude: 11.369204400000001,
    Longitude: 77.67662686841793,
  },
  541: {
    District: 'Kancheepuram',
    State: 'Tamil Nadu',
    Latitude: 12.87960515,
    Longitude: 79.70427615297989,
  },
  542: {
    District: 'Kanyakumari',
    State: 'Tamil Nadu',
    Latitude: 8.079252,
    Longitude: 77.5499338,
  },
  543: {
    District: 'Karur',
    State: 'Tamil Nadu',
    Latitude: 10.9301522,
    Longitude: 78.08485454572889,
  },
  544: {
    District: 'Krishnagiri',
    State: 'Tamil Nadu',
    Latitude: 12.5188835,
    Longitude: 78.2206536,
  },
  545: {
    District: 'Madurai',
    State: 'Tamil Nadu',
    Latitude: 9.9261153,
    Longitude: 78.1140983,
  },
  546: {
    District: 'Nagapattinam',
    State: 'Tamil Nadu',
    Latitude: 10.805627600000001,
    Longitude: 79.824659783024,
  },
  547: {
    District: 'Namakkal',
    State: 'Tamil Nadu',
    Latitude: 11.2191319,
    Longitude: 78.23739801779963,
  },
  548: {
    District: 'Perambalur',
    State: 'Tamil Nadu',
    Latitude: 11.2287716,
    Longitude: 78.81825554962782,
  },
  549: {
    District: 'Pudukkottai',
    State: 'Tamil Nadu',
    Latitude: 10.5,
    Longitude: 78.833333,
  },
  550: {
    District: 'Ramanathapuram',
    State: 'Tamil Nadu',
    Latitude: 9.3895523,
    Longitude: 78.85907071521498,
  },
  551: {
    District: 'Salem',
    State: 'Tamil Nadu',
    Latitude: 11.6612012,
    Longitude: 78.1602498,
  },
  552: {
    District: 'Sivaganga',
    State: 'Tamil Nadu',
    Latitude: 9.851231,
    Longitude: 78.53047154820716,
  },
  553: {
    District: 'Thanjavur',
    State: 'Tamil Nadu',
    Latitude: 10.7860267,
    Longitude: 79.1381497,
  },
  554: {
    District: 'Nilgiris',
    State: 'Tamil Nadu',
    Latitude: 11.4,
    Longitude: 76.7,
  },
  555: {
    District: 'Theni',
    State: 'Tamil Nadu',
    Latitude: 9.969664300000002,
    Longitude: 77.47420048524822,
  },
  556: {
    District: 'Thiruvallur',
    State: 'Tamil Nadu',
    Latitude: 13.13014755,
    Longitude: 79.92435386254967,
  },
  557: {
    District: 'Thiruvarur',
    State: 'Tamil Nadu',
    Latitude: 10.73618605,
    Longitude: 79.63318659437627,
  },
  558: {
    District: 'Thoothukkudi',
    State: 'Tamil Nadu',
    Latitude: 8.756745200000001,
    Longitude: 78.07975266019861,
  },
  559: {
    District: 'Tiruchirappalli',
    State: 'Tamil Nadu',
    Latitude: 10.804973,
    Longitude: 78.6870296,
  },
  560: {
    District: 'Tirunelveli',
    State: 'Tamil Nadu',
    Latitude: 8.8082342,
    Longitude: 77.8114843,
  },
  561: {
    District: 'Tiruppur',
    State: 'Tamil Nadu',
    Latitude: 10.791526650000002,
    Longitude: 77.53254662905589,
  },
  562: {
    District: 'Tiruvannamalai',
    State: 'Tamil Nadu',
    Latitude: 12.22721295,
    Longitude: 79.07015554906167,
  },
  563: {
    District: 'Vellore',
    State: 'Tamil Nadu',
    Latitude: 12.7948109,
    Longitude: 79.0006410968549,
  },
  564: {
    District: 'Viluppuram',
    State: 'Tamil Nadu',
    Latitude: 11.9137874,
    Longitude: 79.50789297942772,
  },
  565: {
    District: 'Virudhunagar',
    State: 'Tamil Nadu',
    Latitude: 9.5208936,
    Longitude: 77.8784563961865,
  },
  566: {
    District: 'Adilabad',
    State: 'Telangana',
    Latitude: 19.5,
    Longitude: 78.5,
  },
  567: {
    District: 'Bhadradri Kothagudem',
    State: 'Telangana',
    Latitude: 17.71534525,
    Longitude: 80.57149761778712,
  },
  568: {
    District: 'Hyderabad',
    State: 'Telangana',
    Latitude: 17.3616079,
    Longitude: 78.4746286,
  },
  569: {
    District: 'Jagtial',
    State: 'Telangana',
    Latitude: 18.82135895,
    Longitude: 78.91506632525903,
  },
  570: {
    District: 'Jangaon',
    State: 'Telangana',
    Latitude: 17.7265463,
    Longitude: 79.25901524867399,
  },
  571: {
    District: 'Jayashankar Bhupalapally',
    State: 'Telangana',
    Latitude: 18.515987199999998,
    Longitude: 79.96939659792528,
  },
  572: {
    District: 'Jogulamba Gadwal',
    State: 'Telangana',
    Latitude: 16.0999202,
    Longitude: 77.73415835077523,
  },
  573: {
    District: 'Kamareddy',
    State: 'Telangana',
    Latitude: 18.316551,
    Longitude: 78.05393808043348,
  },
  574: {
    District: 'Karimnagar',
    State: 'Telangana',
    Latitude: 18.4346438,
    Longitude: 79.1322648,
  },
  575: {
    District: 'Khammam',
    State: 'Telangana',
    Latitude: 17.5,
    Longitude: 80.333333,
  },
  576: {
    District: 'Mahabubabad',
    State: 'Telangana',
    Latitude: 17.7138983,
    Longitude: 80.04134252767227,
  },
  577: {
    District: 'Mahabubnagar',
    State: 'Telangana',
    Latitude: 16.696568550000002,
    Longitude: 77.95911462089693,
  },
  578: {
    District: 'Mancherial',
    State: 'Telangana',
    Latitude: 18.8761795,
    Longitude: 79.4449696,
  },
  579: {
    District: 'Medak',
    State: 'Telangana',
    Latitude: 17.9375095,
    Longitude: 78.21174498510584,
  },
  580: {
    District: 'Medchal Malkajgiri',
    State: 'Telangana',
    Latitude: 17.53498345,
    Longitude: 78.52463873502381,
  },
  581: {
    District: 'Mulugu',
    State: 'Telangana',
    Latitude: 18.1932372,
    Longitude: 79.9413676,
  },
  582: {
    District: 'Nagarkurnool',
    State: 'Telangana',
    Latitude: 16.415762649999998,
    Longitude: 78.68304333132829,
  },
  583: {
    District: 'Nalgonda',
    State: 'Telangana',
    Latitude: 16.8579636,
    Longitude: 79.21749353315548,
  },
  584: {
    District: 'Narayanpet',
    State: 'Telangana',
    Latitude: 16.700551750000002,
    Longitude: 77.61648447017446,
  },
  585: {
    District: 'Nirmal',
    State: 'Telangana',
    Latitude: 19.091520950000003,
    Longitude: 78.39660898429065,
  },
  586: {
    District: 'Nizamabad',
    State: 'Telangana',
    Latitude: 18.75,
    Longitude: 78.25,
  },
  587: {
    District: 'Peddapalli',
    State: 'Telangana',
    Latitude: 18.62065305,
    Longitude: 79.49501710882896,
  },
  588: {
    District: 'Rajanna Sircilla',
    State: 'Telangana',
    Latitude: 18.452116,
    Longitude: 78.76455837158737,
  },
  589: {
    District: 'Ranga Reddy',
    State: 'Telangana',
    Latitude: 17.3715723,
    Longitude: 78.5426289,
  },
  590: {
    District: 'Sangareddy',
    State: 'Telangana',
    Latitude: 17.86859205,
    Longitude: 77.8228199507381,
  },
  591: {
    District: 'Siddipet',
    State: 'Telangana',
    Latitude: 18.005585099999998,
    Longitude: 78.89611304969961,
  },
  592: {
    District: 'Suryapet',
    State: 'Telangana',
    Latitude: 17.08001385,
    Longitude: 79.7925329742427,
  },
  593: {
    District: 'Vikarabad',
    State: 'Telangana',
    Latitude: 17.2702855,
    Longitude: 77.74529700637382,
  },
  594: {
    District: 'Wanaparthy',
    State: 'Telangana',
    Latitude: 16.285294399999998,
    Longitude: 77.98644727021286,
  },
  595: {
    District: 'Warangal Rural',
    State: 'Telangana',
    Latitude: 17.94854255,
    Longitude: 79.81612399359742,
  },
  596: {
    District: 'Warangal Urban',
    State: 'Telangana',
    Latitude: 18.02625695,
    Longitude: 79.46444493996634,
  },
  597: {
    District: 'Yadadri Bhuvanagiri',
    State: 'Telangana',
    Latitude: 17.42819665,
    Longitude: 79.09049097612105,
  },
  598: {
    District: 'Dhalai',
    State: 'Tripura',
    Latitude: 23.8253158,
    Longitude: 91.9732226716333,
  },
  599: {
    District: 'Gomati',
    State: 'Tripura',
    Latitude: 23.4613369,
    Longitude: 91.60718003817723,
  },
  600: {
    District: 'Khowai',
    State: 'Tripura',
    Latitude: 24.04673835,
    Longitude: 91.62320953646798,
  },
  601: {
    District: 'North Tripura',
    State: 'Tripura',
    Latitude: 24.092147599999997,
    Longitude: 92.24512135019847,
  },
  602: {
    District: 'South Tripura',
    State: 'Tripura',
    Latitude: 23.5,
    Longitude: 91.666667,
  },
  603: {
    District: 'Unokoti',
    State: 'Tripura',
    Latitude: 24.19098485,
    Longitude: 92.04604830534434,
  },
  604: {
    District: 'West Tripura',
    State: 'Tripura',
    Latitude: 23.916667,
    Longitude: 91.5,
  },
  605: {
    District: 'Agra',
    State: 'Uttar Pradesh',
    Latitude: 27.1752554,
    Longitude: 78.0098161,
  },
  606: {
    District: 'Aligarh',
    State: 'Uttar Pradesh',
    Latitude: 27.87698975,
    Longitude: 78.13729027600994,
  },
  607: {
    District: 'Ambedkar Nagar',
    State: 'Uttar Pradesh',
    Latitude: 26.40349795,
    Longitude: 82.60728148676125,
  },
  608: {
    District: 'Amethi',
    State: 'Uttar Pradesh',
    Latitude: 26.34738315,
    Longitude: 81.6238783207884,
  },
  609: {
    District: 'Amroha',
    State: 'Uttar Pradesh',
    Latitude: 28.9233969,
    Longitude: 78.48831693262684,
  },
  610: {
    District: 'Auraiya',
    State: 'Uttar Pradesh',
    Latitude: 26.65573395,
    Longitude: 79.51504701181831,
  },
  611: {
    District: 'Azamgarh',
    State: 'Uttar Pradesh',
    Latitude: 26.02269675,
    Longitude: 83.02887343114848,
  },
  612: {
    District: 'Baghpat',
    State: 'Uttar Pradesh',
    Latitude: 28.97240405,
    Longitude: 77.33315284938224,
  },
  613: {
    District: 'Bahraich',
    State: 'Uttar Pradesh',
    Latitude: 27.7336958,
    Longitude: 81.47732127661058,
  },
  614: {
    District: 'Ballia',
    State: 'Uttar Pradesh',
    Latitude: 25.877932549999997,
    Longitude: 84.11995931460379,
  },
  615: {
    District: 'Balrampur',
    State: 'Uttar Pradesh',
    Latitude: 27.4504805,
    Longitude: 82.39541774073132,
  },
  616: {
    District: 'Banda',
    State: 'Uttar Pradesh',
    Latitude: 25.5008211,
    Longitude: 80.499762,
  },
  617: {
    District: 'Barabanki',
    State: 'Uttar Pradesh',
    Latitude: 26.93823105,
    Longitude: 81.38609761204991,
  },
  618: {
    District: 'Bareilly',
    State: 'Uttar Pradesh',
    Latitude: 28.457876,
    Longitude: 79.40557093743058,
  },
  619: {
    District: 'Basti',
    State: 'Uttar Pradesh',
    Latitude: 27.25,
    Longitude: 83,
  },
  620: {
    District: 'Bhadohi',
    State: 'Uttar Pradesh',
    Latitude: 25.422922749999998,
    Longitude: 82.48843708088575,
  },
  621: {
    District: 'Bijnor',
    State: 'Uttar Pradesh',
    Latitude: 29.40604895,
    Longitude: 78.48087839917878,
  },
  622: {
    District: 'Budaun',
    State: 'Uttar Pradesh',
    Latitude: 28.06831165,
    Longitude: 79.04607312079293,
  },
  623: {
    District: 'Bulandshahr',
    State: 'Uttar Pradesh',
    Latitude: 28.38886085,
    Longitude: 77.97479772598118,
  },
  624: {
    District: 'Chandauli',
    State: 'Uttar Pradesh',
    Latitude: 25.1265777,
    Longitude: 83.2496557733391,
  },
  625: {
    District: 'Chitrakoot',
    State: 'Uttar Pradesh',
    Latitude: 25.2195207,
    Longitude: 81.102282425,
  },
  626: {
    District: 'Deoria',
    State: 'Uttar Pradesh',
    Latitude: 26.42384715,
    Longitude: 83.76273169028727,
  },
  627: {
    District: 'Etah',
    State: 'Uttar Pradesh',
    Latitude: 27.5541146,
    Longitude: 78.60078640304634,
  },
  628: {
    District: 'Etawah',
    State: 'Uttar Pradesh',
    Latitude: 26.718324350000003,
    Longitude: 79.09025375025163,
  },
  629: {
    District: 'Ayodhya',
    State: 'Uttar Pradesh',
    Latitude: 26.7990707,
    Longitude: 82.2052321,
  },
  630: {
    District: 'Farrukhabad',
    State: 'Uttar Pradesh',
    Latitude: 27.43719385,
    Longitude: 79.48912946503123,
  },
  631: {
    District: 'Fatehpur',
    State: 'Uttar Pradesh',
    Latitude: 25.8435395,
    Longitude: 80.91800397088501,
  },
  632: {
    District: 'Firozabad',
    State: 'Uttar Pradesh',
    Latitude: 27.17736635,
    Longitude: 78.38991197951182,
  },
  633: {
    District: 'Gautam Buddha Nagar',
    State: 'Uttar Pradesh',
    Latitude: 28.36760975,
    Longitude: 77.59740326369902,
  },
  634: {
    District: 'Ghaziabad',
    State: 'Uttar Pradesh',
    Latitude: 28.711241,
    Longitude: 77.4445372,
  },
  635: {
    District: 'Ghazipur',
    State: 'Uttar Pradesh',
    Latitude: 25.603508400000003,
    Longitude: 83.50745404887138,
  },
  636: {
    District: 'Gonda',
    State: 'Uttar Pradesh',
    Latitude: 27.1096669,
    Longitude: 81.9183291218813,
  },
  637: {
    District: 'Gorakhpur',
    State: 'Uttar Pradesh',
    Latitude: 26.67132865,
    Longitude: 83.36458284327038,
  },
  638: {
    District: 'Hamirpur',
    State: 'Uttar Pradesh',
    Latitude: 25.75,
    Longitude: 80,
  },
  639: {
    District: 'Hapur',
    State: 'Uttar Pradesh',
    Latitude: 28.740612499999997,
    Longitude: 77.83542556519009,
  },
  640: {
    District: 'Hardoi',
    State: 'Uttar Pradesh',
    Latitude: 27.33857665,
    Longitude: 80.0975264641719,
  },
  641: {
    District: 'Hathras',
    State: 'Uttar Pradesh',
    Latitude: 27.57324325,
    Longitude: 78.11173866751716,
  },
  642: {
    District: 'Jalaun',
    State: 'Uttar Pradesh',
    Latitude: 26.105546,
    Longitude: 79.42765264782076,
  },
  643: {
    District: 'Jaunpur',
    State: 'Uttar Pradesh',
    Latitude: 25.7955927,
    Longitude: 82.48834097504385,
  },
  644: {
    District: 'Jhansi',
    State: 'Uttar Pradesh',
    Latitude: 25.531031149999997,
    Longitude: 78.65268901605349,
  },
  645: {
    District: 'Kannauj',
    State: 'Uttar Pradesh',
    Latitude: 26.999697400000002,
    Longitude: 79.68861212775874,
  },
  646: {
    District: 'Kanpur Dehat',
    State: 'Uttar Pradesh',
    Latitude: 26.4600465,
    Longitude: 79.85550999615592,
  },
  647: {
    District: 'Kanpur Nagar',
    State: 'Uttar Pradesh',
    Latitude: 26.4402119,
    Longitude: 80.26930513416637,
  },
  648: {
    District: 'Kasganj',
    State: 'Uttar Pradesh',
    Latitude: 27.883846050000002,
    Longitude: 78.63489003747873,
  },
  649: {
    District: 'Kaushambi',
    State: 'Uttar Pradesh',
    Latitude: 25.53609455,
    Longitude: 81.44672838764605,
  },
  650: {
    District: 'Lakhimpur Kheri',
    State: 'Uttar Pradesh',
    Latitude: 27.985060150000002,
    Longitude: 80.75384538357649,
  },
  651: {
    District: 'Kushinagar',
    State: 'Uttar Pradesh',
    Latitude: 26.7438272,
    Longitude: 83.9162322,
  },
  652: {
    District: 'Lalitpur',
    State: 'Uttar Pradesh',
    Latitude: 24.70038485,
    Longitude: 78.51866758648349,
  },
  653: {
    District: 'Lucknow',
    State: 'Uttar Pradesh',
    Latitude: 26.8381,
    Longitude: 80.9346001,
  },
  654: {
    District: 'Mahoba',
    State: 'Uttar Pradesh',
    Latitude: 25.36176885,
    Longitude: 79.70499475331877,
  },
  655: {
    District: 'Maharajganj',
    State: 'Uttar Pradesh',
    Latitude: 27.09254225,
    Longitude: 83.56696261338257,
  },
  656: {
    District: 'Mainpuri',
    State: 'Uttar Pradesh',
    Latitude: 27.2098219,
    Longitude: 79.04813700847944,
  },
  657: {
    District: 'Mathura',
    State: 'Uttar Pradesh',
    Latitude: 27.633333,
    Longitude: 77.583333,
  },
  658: {
    District: 'Mau',
    State: 'Uttar Pradesh',
    Latitude: 26.0376878,
    Longitude: 83.49793418499047,
  },
  659: {
    District: 'Meerut',
    State: 'Uttar Pradesh',
    Latitude: 28.916667,
    Longitude: 77.683333,
  },
  660: {
    District: 'Mirzapur',
    State: 'Uttar Pradesh',
    Latitude: 24.9356347,
    Longitude: 82.64770129811649,
  },
  661: {
    District: 'Moradabad',
    State: 'Uttar Pradesh',
    Latitude: 28.8638424,
    Longitude: 78.80577833091104,
  },
  662: {
    District: 'Muzaffarnagar',
    State: 'Uttar Pradesh',
    Latitude: 29.44800635,
    Longitude: 77.74068502568672,
  },
  663: {
    District: 'Pilibhit',
    State: 'Uttar Pradesh',
    Latitude: 28.495207649999998,
    Longitude: 80.10754080018077,
  },
  664: {
    District: 'Pratapgarh',
    State: 'Uttar Pradesh',
    Latitude: 25.75,
    Longitude: 81.75,
  },
  665: {
    District: 'Prayagraj',
    State: 'Uttar Pradesh',
    Latitude: 25.4381302,
    Longitude: 81.8338005,
  },
  666: {
    District: 'Rae Bareli',
    State: 'Uttar Pradesh',
    Latitude: 26.25,
    Longitude: 81.25,
  },
  667: {
    District: 'Rampur',
    State: 'Uttar Pradesh',
    Latitude: 28.79406825,
    Longitude: 79.1859304458554,
  },
  668: {
    District: 'Saharanpur',
    State: 'Uttar Pradesh',
    Latitude: 29.9880774,
    Longitude: 77.5081299470512,
  },
  669: {
    District: 'Sambhal',
    State: 'Uttar Pradesh',
    Latitude: 28.61875255,
    Longitude: 78.55087405404804,
  },
  670: {
    District: 'Sant Kabir Nagar',
    State: 'Uttar Pradesh',
    Latitude: 26.7882737,
    Longitude: 82.9600798,
  },
  671: {
    District: 'Shahjahanpur',
    State: 'Uttar Pradesh',
    Latitude: 27.912633149999998,
    Longitude: 79.74656294869826,
  },
  672: {
    District: 'Shamli',
    State: 'Uttar Pradesh',
    Latitude: 29.5008816,
    Longitude: 77.34838258540861,
  },
  673: {
    District: 'Sitapur',
    State: 'Uttar Pradesh',
    Latitude: 27.5046392,
    Longitude: 80.82946583420815,
  },
  674: {
    District: 'Sonbhadra',
    State: 'Uttar Pradesh',
    Latitude: 24.38657525,
    Longitude: 83.07863061278505,
  },
  675: {
    District: 'Sultanpur',
    State: 'Uttar Pradesh',
    Latitude: 26.242510850000002,
    Longitude: 82.29616931685918,
  },
  676: {
    District: 'Unnao',
    State: 'Uttar Pradesh',
    Latitude: 26.57550365,
    Longitude: 80.61376177782856,
  },
  677: {
    District: 'Varanasi',
    State: 'Uttar Pradesh',
    Latitude: 25.3356491,
    Longitude: 83.0076292,
  },
  678: {
    District: 'Almora',
    State: 'Uttarakhand',
    Latitude: 29.703094999999998,
    Longitude: 79.43317023326716,
  },
  679: {
    District: 'Bageshwar',
    State: 'Uttarakhand',
    Latitude: 30.0086722,
    Longitude: 79.9302967950447,
  },
  680: {
    District: 'Chamoli',
    State: 'Uttarakhand',
    Latitude: 30.499632300000002,
    Longitude: 79.61879245944404,
  },
  681: {
    District: 'Champawat',
    State: 'Uttarakhand',
    Latitude: 29.23631315,
    Longitude: 80.10172076512075,
  },
  682: {
    District: 'Dehradun',
    State: 'Uttarakhand',
    Latitude: 30.3255646,
    Longitude: 78.0436813,
  },
  683: {
    District: 'Haridwar',
    State: 'Uttarakhand',
    Latitude: 29.9384473,
    Longitude: 78.1452985,
  },
  684: {
    District: 'Nainital',
    State: 'Uttarakhand',
    Latitude: 29.2031392,
    Longitude: 79.4176945,
  },
  685: {
    District: 'Pauri Garhwal',
    State: 'Uttarakhand',
    Latitude: 29.84591115,
    Longitude: 78.70766746320547,
  },
  686: {
    District: 'Pithoragarh',
    State: 'Uttarakhand',
    Latitude: 30.12666775,
    Longitude: 80.48338013734374,
  },
  687: {
    District: 'Rudraprayag',
    State: 'Uttarakhand',
    Latitude: 30.3009965,
    Longitude: 79.06287964782695,
  },
  688: {
    District: 'Tehri Garhwal',
    State: 'Uttarakhand',
    Latitude: 30.5,
    Longitude: 78.666667,
  },
  689: {
    District: 'Udham Singh Nagar',
    State: 'Uttarakhand',
    Latitude: 29.048098799999998,
    Longitude: 79.4313133223357,
  },
  690: {
    District: 'Uttarkashi',
    State: 'Uttarakhand',
    Latitude: 30.9654214,
    Longitude: 78.63368731187963,
  },
  691: {
    District: 'Alipurduar',
    State: 'West Bengal',
    Latitude: 26.4851573,
    Longitude: 89.5246926,
  },
  692: {
    District: 'Bankura',
    State: 'West Bengal',
    Latitude: 23.13195425,
    Longitude: 87.20739720367507,
  },
  693: {
    District: 'Birbhum',
    State: 'West Bengal',
    Latitude: 24,
    Longitude: 87.583333,
  },
  694: {
    District: 'Cooch Behar',
    State: 'West Bengal',
    Latitude: 26.3223696,
    Longitude: 89.4592445,
  },
  695: {
    District: 'Dakshin Dinajpur',
    State: 'West Bengal',
    Latitude: 25.38703085,
    Longitude: 88.50471504999999,
  },
  696: {
    District: 'Darjeeling',
    State: 'West Bengal',
    Latitude: 27.0383718,
    Longitude: 88.2617544,
  },
  697: {
    District: 'Hooghly',
    State: 'West Bengal',
    Latitude: 22.9052114,
    Longitude: 88.3760639,
  },
  698: {
    District: 'Howrah',
    State: 'West Bengal',
    Latitude: 22.5882216,
    Longitude: 88.323139,
  },
  699: {
    District: 'Jalpaiguri',
    State: 'West Bengal',
    Latitude: 26.626483649999997,
    Longitude: 88.73407701468993,
  },
  700: {
    District: 'Jhargram',
    State: 'West Bengal',
    Latitude: 22.3770636,
    Longitude: 87.04867177362203,
  },
  701: {
    District: 'Kalimpong',
    State: 'West Bengal',
    Latitude: 27.07169,
    Longitude: 88.4729,
  },
  702: {
    District: 'Kolkata',
    State: 'West Bengal',
    Latitude: 22.54541245,
    Longitude: 88.3567751581234,
  },
  703: {
    District: 'Malda',
    State: 'West Bengal',
    Latitude: 25.0057449,
    Longitude: 88.1398483,
  },
  704: {
    District: 'Paschim Medinipur',
    State: 'West Bengal',
    Latitude: 22.3599134,
    Longitude: 87.41331447600871,
  },
  705: {
    District: 'Murshidabad',
    State: 'West Bengal',
    Latitude: 24.1745993,
    Longitude: 88.2721335,
  },
  706: {
    District: 'Nadia',
    State: 'West Bengal',
    Latitude: 23.48454125,
    Longitude: 88.55676307470536,
  },
  707: {
    District: 'North 24 Parganas',
    State: 'West Bengal',
    Latitude: 22.7182799,
    Longitude: 88.64248090898516,
  },
  708: {
    District: 'Paschim Bardhaman',
    State: 'West Bengal',
    Latitude: 23.64260775,
    Longitude: 87.16448126068323,
  },
  709: {
    District: 'Purba Bardhaman',
    State: 'West Bengal',
    Latitude: 23.391717,
    Longitude: 87.90621212355462,
  },
  710: {
    District: 'Purba Medinipur',
    State: 'West Bengal',
    Latitude: 22.06382145,
    Longitude: 87.74573460267038,
  },
  711: {
    District: 'Purulia',
    State: 'West Bengal',
    Latitude: 23.29614645,
    Longitude: 86.34210770023,
  },
  712: {
    District: 'South 24 Parganas',
    State: 'West Bengal',
    Latitude: 22.1815262,
    Longitude: 88.53780483989941,
  },
  713: {
    District: 'Uttar Dinajpur',
    State: 'West Bengal',
    Latitude: 25.8707958,
    Longitude: 87.96259728449391,
  },
  714: {
    District: 'Saitual',
    State: 'Mizoram',
    Latitude: 23.6929995,
    Longitude: 92.965428,
  },
  715: {
    District: 'Hnahthial',
    State: 'Mizoram',
    Latitude: 22.9663656,
    Longitude: 93.01026448504744,
  },
  716: {
    District: 'Khawzawl',
    State: 'Mizoram',
    Latitude: 23.53892045,
    Longitude: 93.1586839061471,
  },
  717: {
    District: 'Tenkasi',
    State: 'Tamil Nadu',
    Latitude: 9.09407535,
    Longitude: 77.47583689833286,
  },
  718: {
    District: 'Chengalpattu',
    State: 'Tamil Nadu',
    Latitude: 12.76657415,
    Longitude: 79.99931906821485,
  },
  719: {
    District: 'Ranipet',
    State: 'Tamil Nadu',
    Latitude: 12.9272641,
    Longitude: 79.3330076,
  },
  720: {
    District: 'Kallakurichi',
    State: 'Tamil Nadu',
    Latitude: 11.79468465,
    Longitude: 79.03882106200822,
  },
  721: {
    District: 'Tirupathur',
    State: 'Tamil Nadu',
    Latitude: 12.453306399999999,
    Longitude: 78.55290857022919,
  },
};

const shortForms = {
  'Andaman and Nicobar Islands': 'AN',
  'Andhra Pradesh': 'AP',
  'Arunachal Pradesh': 'AR',
  Assam: 'AS',
  Bihar: 'BR',
  Chandigarh: 'CH',
  Chhattisgarh: 'CT',
  Delhi: 'DL',
  'Dadra & Nagar Haveli': 'DN',
  'Daman & Diu': 'DI',
  Goa: 'GA',
  Gujarat: 'GJ',
  'Himachal Pradesh': 'HP',
  Haryana: 'HR',
  Jharkhand: 'JH',
  'Jammu and Kashmir': 'JK',
  Karnataka: 'KA',
  Kerala: 'KL',
  Ladakh: 'LA',
  Maharashtra: 'MH',
  Meghalaya: 'ML',
  Manipur: 'MN',
  'Madhya Pradesh': 'MP',
  Mizoram: 'MZ',
  Nagaland: 'NL',
  Odisha: 'OD',
  Punjab: 'PB',
  Puducherry: 'PY',
  Rajasthan: 'RJ',
  Sikkim: 'SK',
  Telangana: 'TG',
  'Tamil Nadu': 'TN',
  Tripura: 'TR',
  TT: 'TT',
  UN: 'UN',
  'Uttar Pradesh': 'UP',
  Uttarakhand: 'UT',
  'West Bengal': 'WB',
};

const colorCodes = {
  'Andhra Pradesh': '#e3aafc',
  'Arunachal Pradesh': '#fbabc1',
  Assam: '#f6f1b0',
  Bihar: '#b5e6f0',
  Chhattisgarh: '#fcdfb3',
  Delhi: '#e0e4c9',
  Goa: '#b8f7d8',
  Gujarat: '#b3e5f9',
  'Himachal Pradesh': '#d5ccfd',
  Haryana: '#e5bbb2',
  Jharkhand: '#f8a0a2',
  'Jammu and Kashmir': '#fdbde9',
  Karnataka: '#fc9da6',
  Kerala: '#a9f2ae',
  Ladakh: '#d4dbf8',
  Maharashtra: '#feedb3',
  Meghalaya: '#e5f3af',
  Manipur: '#bfb9f5',
  'Madhya Pradesh': '#d5dfd4',
  Mizoram: '#fbd9bb',
  Nagaland: '#c7fee8',
  Odisha: '#c7f4e4',
  Punjab: '#e3fa93',
  Rajasthan: '#dcdfee',
  Sikkim: '#c6f2fb',
  Telangana: '#dee3f2',
  'Tamil Nadu': '#cfcdee',
  Tripura: '#fef1c7',
  'Uttar Pradesh': '#fdd7d7',
  Uttarakhand: '#eddce2',
  'West Bengal': '#dfc8be',
};

let yrnow = 0;
let inc = 0.04;

function map(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
}

var colors = d3
  .scaleLinear()
  .domain(d3.ticks(0, 20, 7))
  .range([
    '#fff',
    '#FFFFBF',
    '#FEE08B',
    '#FDAE61',
    '#F46D43',
    '#D53E4F',
    '#9E0142',
  ]);

var pathLine = d3
  .line()

  .x(function (d) {
    return projection([d[0], d[1]])[0];
  })
  .y(function (d) {
    return projection([d[0], d[1]])[1];
  })
  .curve(d3.curveBasis);

function drawPaths() {
  for (let roar of zathura) {
    if (roar.name.includes('Andam')) continue;
    const path = g
      .append('path')
      .attr('d', pathLine(roar.points))
      .attr('class', 'twinkpath ' + roar.name)
      .style('stroke', '#0e0ec799')
      .style('fill', 'transparent')
      .style('stroke-width', '2px')
      .call(transition);
    // const total = path.node().getTotalLength();
    // console.log(total);
  }
}

function transition(path) {
  path
    .transition()
    .duration(7500)
    .attrTween('stroke-dasharray', tweenDash)
    .on('end', function () {
      d3.select(this).call(transition);
    });
}

function tweenDash() {
  var l = this.getTotalLength(),
    i = d3.interpolateString('0,' + l, l + ',' + l);
  return function (t) {
    return i(t);
  };
}

// function animmate() {
//   // window.abc = d3.selectAll('.twinkpath');
//   d3.selectAll('.twinkpath')
//     .nodes[0].attr('stroke-dasharray', 100 + ' ' + 100)
//     .attr('stroke-dashoffset', 100)
//     .transition()
//     .duration(5000)
//     .ease('linear')
//     .attr('stroke-dashoffset', 0);
// }

function updateFacet() {
  let data = realData;
  drawSubUnits(data);
  drawPaths();
}

var width = window.innerWidth,
  height = window.innerHeight;

var projection = d3.geoMercator();

var path = d3.geoPath().projection(projection).pointRadius(2);
var neighbors = [];
var realData = null;

var svg = d3
  .select('#map')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var g = svg.append('g');

d3.json(file, function (error, data) {
  centerZoom(data);
  realData = data;
  neighbors = topojson.neighbors(data.objects.states.geometries);
  initiateNo();
});

function centerZoom(data) {
  var o = topojson.mesh(data, data.objects.states, function (a, b) {
    return a === b;
  });

  projection.scale(1).translate([0, 0]);

  var b = path.bounds(o),
    s =
      1 /
      Math.max(
        (b[1][0] - b[0][0]) / width,
        ((b[1][1] - b[0][1]) / height) * 1.04
      ),
    t = [
      (width - s * (b[1][0] + b[0][0])) * 0.41,
      (height - s * (b[1][1] + b[0][1])) * 0.5,
    ];

  var p = projection.scale(s).translate(t);

  return o;
}

function drawOuterBoundary(data) {
  const boundary = topojson.mesh(data, data.objects.states, function (a, b) {
    return a === b;
  });
  g.append('path')
    .datum(boundary)
    .attr('d', path)
    .attr('class', 'subunit-boundary')
    .attr('fill', 'none')
    .attr('stroke', '#3a403d');
}

function drawSubUnits(data) {
  var subunits = g
    .selectAll('.subunit')
    .data(topojson.feature(data, data.objects.districts).features)
    .enter()
    .append('path')
    .attr('class', 'subunit')
    .attr('d', path)
    .attr('fill', '#fff')
    .style('stroke', function (d) {
      return '#ddd';
    })
    .style('stroke-width', function (d) {
      return path.area(d) > 3000 ? '1px' : '0.8px';
    });

  var subunits = g
    .selectAll('.subunitx')
    .data(topojson.feature(data, data.objects.states).features)
    .enter()
    .append('path')
    .attr('class', 'subunitx')
    .attr('d', path)
    .attr('fill', '#fff')
    .style('stroke', function (d) {
      return '#666';
    })
    .style('stroke-width', function (d) {
      return '1px';
    });

  return subunits;
}

function drawSubUnitLabels(data) {
  g.selectAll('.subunit-label')
    .data(topojson.feature(data, data.objects.states).features)
    .enter()
    .append('text')
    .attr('class', 'subunit-label')
    .attr('transform', function (d) {
      const [locx, locy] = path.centroid(d);
      const fin = [locx, locy];
      return 'translate(' + fin + ')';
    })
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .style('font-size', function (d) {
      const area = path.area(d);
      const [[left, top], [right, bottom]] = path.bounds(d);
      const wid = right - left;
      if (wid < 200) {
        const mappedf = map(wid, 20, 200, 0.2, 1);
        const confx = constrain(mappedf, 0.2, 1);
        return confx * 1.2 + 'em';
      } else {
        const mappedf = map(wid, 200, 2000, 1, 1.8);
        const confx = constrain(mappedf, 1, 1.8);
        return confx + 'em';
      }
    })
    .style('fill', (d) => '#222')
    .text(function (d) {
      return d.properties.st_nm in cases ? 'a' : d.properties.st_nm;
    });
}

function initiateNo() {
  updateFacet();
}

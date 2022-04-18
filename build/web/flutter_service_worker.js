'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7716ab0170b5c46c37a3b154f0d20baf",
"assets/assets/images/ACCESSORIES/01.png": "565bae7238023d1a1562441a65bc8370",
"assets/assets/images/ACCESSORIES/02.png": "b351b1862b461674a3207c2c053d446c",
"assets/assets/images/ACCESSORIES/03.png": "cc2305a327f05594e7a6abb56171c6a7",
"assets/assets/images/ACCESSORIES/04.png": "abe44cc725befc3a7d3029ff120c6677",
"assets/assets/images/ACCESSORIES/05.png": "0f1e3c0047b0062184b4ba5c8da6f11b",
"assets/assets/images/ACCESSORIES/06.png": "5a1450626be29c9c01bd5f2e1809d8cd",
"assets/assets/images/ACCESSORIES/07.png": "df0e784fa6cfb42a32d84b018d823667",
"assets/assets/images/ACCESSORIES/08.png": "f649535aa5de3a1cc2968606f5e4774f",
"assets/assets/images/ACCESSORIES/09.png": "5503271b11b13ebc6441e59603b776ca",
"assets/assets/images/ACCESSORIES/10.png": "c78d248738c9bd95419cd9dbcfa93fed",
"assets/assets/images/bellicon.png": "bf055b8e136179a8d941613a3c35eaad",
"assets/assets/images/BOX.png": "e6c1a359c0219111a0a2d529bbb8932e",
"assets/assets/images/buttonmulai.png": "1b2427fc253dcab673c1803965dd4069",
"assets/assets/images/command-race.png": "e1b599a63e5e68c0cd3f683e5503b5ab",
"assets/assets/images/command-texture.png": "e053ccd980b3fce178b8e92a1a5cf0a9",
"assets/assets/images/copyright.png": "bbf7a68e4c48edeed79e27d9b5a8cfd5",
"assets/assets/images/darkbg.png": "91c4217fe62f61c55b1e9f93f96f21e9",
"assets/assets/images/downbutton.png": "28074c4144dab81d53267956381bcfd0",
"assets/assets/images/downloadbutton.png": "b2877918f21130a65e77acfff771c523",
"assets/assets/images/exitbutton.png": "dd7e1ae870eaf781dfd3498f69279216",
"assets/assets/images/EXTRUDED_BONES/01.png": "8fde8ce630f2c09493b20235c8e25841",
"assets/assets/images/EXTRUDED_BONES/02.png": "3a7cf5c186800aca0412742a76beba45",
"assets/assets/images/EXTRUDED_BONES/03.png": "a72a11567dbe89123247610a362e38ff",
"assets/assets/images/EXTRUDED_BONES/04.png": "5c11a8dd7e31047986f77855a88cc68b",
"assets/assets/images/EXTRUDED_BONES/05.png": "3e9a3b019930ccde203cde54d7051197",
"assets/assets/images/EXTRUDED_BONES/06.png": "93dbb719709d21b6117cc78d3575f5da",
"assets/assets/images/EXTRUDED_BONES/07.png": "13721411baf2fa07f2ca30f507c7ff25",
"assets/assets/images/EXTRUDED_BONES/08.png": "6b31d65bcc1162c1cc9f241c8da804e9",
"assets/assets/images/EXTRUDED_BONES/09.png": "dc3af3985220e33e9b8a115399f3fd4a",
"assets/assets/images/EXTRUDED_BONES/10.png": "e60464b1134ee3d2aceae1e6e11859c2",
"assets/assets/images/EXTRUDED_BONES/11.png": "a431688c858951b854bc4a3d298e2cb1",
"assets/assets/images/EXTRUDED_BONES/12.png": "e8dcd6c010d6705681a608a20263c85d",
"assets/assets/images/EXTRUDED_BONES/13.png": "e82c1396e575181d170da05203ef4cb7",
"assets/assets/images/EXTRUDED_BONES/14.png": "56407e31921c367f4d369722108e5c3b",
"assets/assets/images/EXTRUDED_BONES/15.png": "4f3475ca060ec896e0788f9730e52769",
"assets/assets/images/EXTRUDED_BONES/16.png": "ede18fc1f9349bd1c4a85884c391c8fd",
"assets/assets/images/EXTRUDED_BONES/17.png": "b7e2dfb77a6e158c70d5fa633a5f7be4",
"assets/assets/images/EXTRUDED_BONES/18.png": "f1468356869d6bd1c40de53002206cc1",
"assets/assets/images/EXTRUDED_BONES/19.png": "2e061a9779142d3239de79ba32461b31",
"assets/assets/images/EXTRUDED_BONES/20.png": "573f1d9fc61d7832f6017cdad3782c50",
"assets/assets/images/EYE/01.png": "6446cb8f07f6b6dca352a83564c16be5",
"assets/assets/images/EYE/02.png": "2ca6b0ed670de9aea41b857942d3fb53",
"assets/assets/images/EYE/03.png": "75de0897aa328ee6095b343dc54af604",
"assets/assets/images/EYE/04.png": "8eb58b1ba5bcc36b847818e5449504ef",
"assets/assets/images/EYE/05.png": "be37096766052920a09d3a241b669149",
"assets/assets/images/EYE/06.png": "50bb8e266dc819df1b8fe37d67a90485",
"assets/assets/images/EYE/07.png": "b74b123d105a8aa677acd025d5dadc3f",
"assets/assets/images/EYE/08.png": "a8d88b7b2105d172db912be862de5a91",
"assets/assets/images/EYE/09.png": "0111c64d94d1e7eee57346ff63e5d5c3",
"assets/assets/images/EYE/10.png": "eb65cd35326bd344057e5c1fa007e5ae",
"assets/assets/images/EYE/11.png": "f521e612063a4fc16554c4db6d8025d4",
"assets/assets/images/EYE/12.png": "e4acb1b10c3517c47e6e8b29e5c5dacf",
"assets/assets/images/eyeicon.png": "fe27e2721208bd8ef98f59b82500d747",
"assets/assets/images/finicon.png": "d3f79aaf42a58c70eb2575290ffad36c",
"assets/assets/images/headicon.png": "84fe34dbc6e7ce4fa2c8bc3ea2fa8ea5",
"assets/assets/images/homebutton.png": "e6c5c0f27b2b233a5affdc7a2915973f",
"assets/assets/images/informationbutton.png": "16d6fdf41f2f041bd5cbe4433cf29929",
"assets/assets/images/LIGHT-BG.png": "55028c877a7958a8e1e18d35aec95102",
"assets/assets/images/logo.png": "dc5e3865ad498092f5ad2ce969be7903",
"assets/assets/images/MISC/MISC_01.png": "39a1e0e2925f3d3bbb8f100b37aa5055",
"assets/assets/images/MISC/MISC_02.png": "ae2a0a1370b20b25017a058c0a748617",
"assets/assets/images/MISC/MISC_03.png": "2264f147e1ef69b8ec62c20a4d6d986a",
"assets/assets/images/MISC/MISC_04.png": "45f50f2dd119e3a862ae745de60b7829",
"assets/assets/images/MISC/MISC_05.png": "48466c284428c50f834f3e2db3702616",
"assets/assets/images/MISC/MISC_06.png": "66fc859b55b1a5b1d6f4b6607cb505f6",
"assets/assets/images/MISC/MISC_07.png": "5241bb493fbacee42728bd8e0f5ad71f",
"assets/assets/images/MISC/MISC_08.png": "0befbc14f8322bc03e6aa30c576e553d",
"assets/assets/images/MISC/MISC_09.png": "beb5c5c5225c27da816323dec12bcee7",
"assets/assets/images/MISC/MISC_10.png": "9cbdf8b353aba2e22c9f965d08626df3",
"assets/assets/images/miscicon.png": "d1d3db2c0e8a421ff053c3ff9c4622c7",
"assets/assets/images/naga.png": "c340870f77222604f6ebd2b61501ab1c",
"assets/assets/images/nonebutton.png": "df8ed966e72a90d6a3e255ca1a8f069d",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-01.png": "2ad2abd82f1e206e414c249b885d1720",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-02.png": "861307f0f11283c42c76e33ccefa4e0f",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-03.png": "96344308eda939eb3050a5afe3ebcf8e",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-04.png": "9dbd9fbf4df2db725f7cfc7bbe496ac6",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-05.png": "6010a0bdf2dc144c0b9cc2f1000971b0",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-06.png": "f1013dbc6a61fb0dd01119860b2dce93",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-07.png": "cd98a3ef236f1152f4845531be0eb605",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-08.png": "0d0d434f516094711ea42e9746b0f255",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-09.png": "462667a99382713bac656b1f31725084",
"assets/assets/images/PREVIEW/ACCESSORIES/ACC-10.png": "748f7a91ef6791b871269bc41d24392f",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/01.png": "b1d5343d67947f11ecf3d9cc5db8bc7c",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/02.png": "08e239999775fc041dad4305159e1472",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/03.png": "848667c911d9e14bd4f57cbdf7eb2c86",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/04.png": "f0a2c5f402a9755047ffa6d4bb376592",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/05.png": "4a7d32b06dedd19c2d3d9e2415646b8b",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/06.png": "9b33f783ce2e2395c76de961e892be8d",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/07.png": "3f88ef4539ce2190d3e63428e21ef4f8",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/08.png": "518b34086099d00201c1c82920c2b971",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/09.png": "12c1233e41829e5e1c7cb273c5e71e6d",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/10.png": "bcefe4595d4b2a773e37b5b7b48ffd8c",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/11.png": "2807bf67862b4179b7285fe9d84bff0d",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/12.png": "eb77bb716631ceee5ebec2867152f7c7",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/13.png": "97a4809748beaf43b85ce50d8568a4ba",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/14.png": "10c268f837a0c95176e93d47161299cb",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/15.png": "211fc3cbe63ce011e477f48b304700cc",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/16.png": "71c235b1087a6b659f93eec747eb2a39",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/17.png": "e686e940d4f300c43419b1bb6839e442",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/18.png": "b3c052e62b3847c2a8b6a453dc2b60b8",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/19.png": "488f22c3299d3504dc9150f3a244dccf",
"assets/assets/images/PREVIEW/EXTRUDED_BONES/20.png": "30a376f4eb51feeefa3978a4d5829790",
"assets/assets/images/PREVIEW/EYE/EYE-01.png": "5f47e3028d6e9abcee2f86c9ae90563e",
"assets/assets/images/PREVIEW/EYE/EYE-02.png": "56333f2dc6f6feef362346f37916121a",
"assets/assets/images/PREVIEW/EYE/EYE-03.png": "3c866d460d1fe0e66e4678239f7a39a4",
"assets/assets/images/PREVIEW/EYE/EYE-04.png": "78a156a97ea313bb5611ef10a922ab90",
"assets/assets/images/PREVIEW/EYE/EYE-05.png": "6da70d7e473e0c0c45a46000400be1c3",
"assets/assets/images/PREVIEW/EYE/EYE-06.png": "7f621ff17153b16bac8374b0a4121bf4",
"assets/assets/images/PREVIEW/EYE/EYE-07.png": "8c9b503e673a36964d8d5fb366252011",
"assets/assets/images/PREVIEW/EYE/EYE-08.png": "1f8a5d25057b533a2ac3fd8a35e4e268",
"assets/assets/images/PREVIEW/EYE/EYE-09.png": "266ce779a6a6393c3d0de3ecb6504416",
"assets/assets/images/PREVIEW/EYE/EYE-10.png": "5fcb7861f1cd46fed61ebe60f35ceae1",
"assets/assets/images/PREVIEW/EYE/EYE-11.png": "01e9a333311d1553f58fe5f8f24ffd3f",
"assets/assets/images/PREVIEW/EYE/EYE-12.png": "c8d4752294a8f2f152a53a1250ffa66e",
"assets/assets/images/PREVIEW/EYE/EYE.png": "23e4605663a8dad6934d86e0dd6925d5",
"assets/assets/images/PREVIEW/EYE-01.png": "5f47e3028d6e9abcee2f86c9ae90563e",
"assets/assets/images/PREVIEW/HEAD-1-A.png": "15925fd04ae0bc1660e51afdda955262",
"assets/assets/images/PREVIEW/HEAD-1-B.png": "f7cf5430ad41d5a0e546a11edbb76f54",
"assets/assets/images/PREVIEW/MISC/MISC-01.png": "52c8f527ecf4dfb08131d956b54077d8",
"assets/assets/images/PREVIEW/MISC/MISC-02.png": "ee992e70a742ef933f28e78fb5a11953",
"assets/assets/images/PREVIEW/MISC/MISC-03.png": "c9d76e35ffabbad98ed9a96fed7c0d66",
"assets/assets/images/PREVIEW/MISC/MISC-04.png": "34efdbb41fa93f4b954c4e07f02411e9",
"assets/assets/images/PREVIEW/MISC/MISC-05.png": "fd655944ab1a568034de5b0201ffb205",
"assets/assets/images/PREVIEW/MISC/MISC-06.png": "747894d7cf26736a346677e0937e6aa6",
"assets/assets/images/PREVIEW/MISC/MISC-07.png": "e00b8e547ecd6af40f32615f85bf16c7",
"assets/assets/images/PREVIEW/MISC/MISC-08.png": "37b2f06b1928d6bb4ceb0d243b5e2ed6",
"assets/assets/images/PREVIEW/MISC/MISC-09.png": "d52b4d6e90700809ae18a4fe4f40972f",
"assets/assets/images/PREVIEW/MISC/MISC-10.png": "1b2bb2e091332d22dbf5aa0097aa05a6",
"assets/assets/images/PREVIEW/TEST-DARK.png": "4ac2e0f704e02ec1d7e6e8bafa1a5717",
"assets/assets/images/PREVIEW/TEXT_1/GEST-1.png": "241267a042cccf9837e4b5bd6447a711",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-A.png": "3d7bb9df995f3455f156aef4d3dd6448",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-B.png": "5392bb9a89dab7fc01d9d8eaa450eb6e",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-C.png": "c5de573c1022901ba83148ee958945db",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-D.png": "f96284e54efa4babe79e7a1caf798d62",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-E.png": "58b5aae424e96150e346d7e24a75578e",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-F.png": "110a4887ecaf258bd7dccdffec587b4d",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-G.png": "ad832fc370c1c73e1327bc55395ac258",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-H.png": "2f341e5117d068bc2f897e35dcfd2951",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-I.png": "15925fd04ae0bc1660e51afdda955262",
"assets/assets/images/PREVIEW/TEXT_1/HEAD-1-J.png": "f7cf5430ad41d5a0e546a11edbb76f54",
"assets/assets/images/PREVIEW/TEXT_1/TAIL-1-A.png": "3ee6f41a9a7c3c9dc8953c02131300f8",
"assets/assets/images/PREVIEW/TEXT_1/TAIL-1-B.png": "65874e18011f2fb38164350e455b1251",
"assets/assets/images/PREVIEW/TEXT_1/TAIL-1-C.png": "6b2b4494d0856db12e57b621e19f3d27",
"assets/assets/images/PREVIEW/TEXT_1/TAIL-1-D.png": "ca05c6c9720175ddcebe3019bc37cb69",
"assets/assets/images/PREVIEW/TEXT_1/TAIL-1-E.png": "aff8912fe8fc54553135bc8ca52fb474",
"assets/assets/images/PREVIEW/TEXT_1/TAIL-1-F.png": "07710bc08bc298bdb4b9d906e1ef3fbd",
"assets/assets/images/PREVIEW/TEXT_2/GEST-2.png": "c33c2e683dcc40d9953d87ff570deceb",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-A.png": "ed48c3859edfecf5f745470977e6aa85",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-B.png": "f0d349f188779d1f7db07dffc4fb10cb",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-C.png": "8314f898ccb5e41abc55a0cfaea62522",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-D.png": "0a95a99fd0c7edc7f42d54026526b3df",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-E.png": "c387fc9ce577b1d75f07df314136dbbc",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-F.png": "f854cbb88d4f1b9e89f20941194f69ae",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-G.png": "527f1310aab2b5da5b9350da8858bdc1",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-H.png": "3507b19e07d84a4b406832c4dc0565f1",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-I.png": "c16008be79a03a7279bb9e24992557d0",
"assets/assets/images/PREVIEW/TEXT_2/HEAD-2-J.png": "0e504d4d2dc1d7da7df8b7694041d1ae",
"assets/assets/images/PREVIEW/TEXT_2/TAIL-2-A.png": "93bc9443453ecf14db1659c5e963a8d5",
"assets/assets/images/PREVIEW/TEXT_2/TAIL-2-B.png": "10b0baf949605c9d5d9b598828c33bd2",
"assets/assets/images/PREVIEW/TEXT_2/TAIL-2-C.png": "b59f36b941679fade9f418775d222767",
"assets/assets/images/PREVIEW/TEXT_2/TAIL-2-D.png": "7f90d67991322c2a11aae74d74fb4544",
"assets/assets/images/PREVIEW/TEXT_2/TAIL-2-E.png": "2d4712a72f21d1ada77496e442e9c46b",
"assets/assets/images/PREVIEW/TEXT_2/TAIL-2-F.png": "96f44503c82b888054c9896a6eaaee36",
"assets/assets/images/PREVIEW/TEXT_3/GEST-3.png": "9791ce86e68682abf5a02f3c30cee318",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-A.png": "db18663eec32930319885611395dcbd1",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-B.png": "fa7746af17cc85b49bdfe798e831f91c",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-C.png": "a700f9e5fd8ef1ec6e4c1acbfa7f6837",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-D.png": "cb70f5486855b920709d21d5f72276f9",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-E.png": "77b04fe97782c5be263d8c6ea9d6ff09",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-F.png": "05f55d8c610d99e25c03c8f4f6311b0d",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-G.png": "01c15af157254eeaf368a612a95ecffe",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-H.png": "c14e05fc6c365e3a1dbb73937138d65e",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-I.png": "b2c95ae4854c86837b9b8ce0bca33442",
"assets/assets/images/PREVIEW/TEXT_3/HEAD-3-J.png": "27c5d12f414442044af8feea95a6e16b",
"assets/assets/images/PREVIEW/TEXT_3/TAIL-3-A.png": "5d69621ded6d3e462addf9ff6a26a77d",
"assets/assets/images/PREVIEW/TEXT_3/TAIL-3-B.png": "b261a93e02db553e318f9acfd5385427",
"assets/assets/images/PREVIEW/TEXT_3/TAIL-3-C.png": "c8f5a6bc9e4d8c141afcb3c59cc1add1",
"assets/assets/images/PREVIEW/TEXT_3/TAIL-3-D.png": "16388aec0ce66d9c4efb4dce4c6b75d3",
"assets/assets/images/PREVIEW/TEXT_3/TAIL-3-E.png": "869f058fc81a57ad189867d37a772d33",
"assets/assets/images/PREVIEW/TEXT_3/TAIL-3-F.png": "95950c3d37582d78241a58eab9d9973e",
"assets/assets/images/PREVIEW/TEXT_4/GEST-4.png": "708792ef17615267aedaacf61d3da41f",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-A.png": "646ede1bb80b2da2e5660e865d4af678",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-B.png": "75b46965220549ac0c71abe0534e3741",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-C.png": "a78f5cf08fb985e649fd6d2623b5c969",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-D.png": "a1140c5dc2c3f2449c2d0275a4a42cc8",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-E.png": "15e793a6f1bb75a993fd907cc896e8f6",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-F.png": "0bcc7410d414e16b6f6eda9b27e980cb",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-G.png": "4f227701ca855f71c96abcfd815cc8f1",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-H.png": "f3888b3ead5cda6df1354479d8ed906d",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-I.png": "6a9cd2c74b5d5705924d2e4a6bf174e3",
"assets/assets/images/PREVIEW/TEXT_4/HEAD-4-J.png": "1aef0cb1aedee027b7dcb6303ab764d8",
"assets/assets/images/PREVIEW/TEXT_4/TAIL-4-A.png": "9e12c8ff3c78f85e55c5e01c0e8e70c3",
"assets/assets/images/PREVIEW/TEXT_4/TAIL-4-B.png": "7d5112ad989dc68ac7f8f320bc4d67c3",
"assets/assets/images/PREVIEW/TEXT_4/TAIL-4-C.png": "dea9c97db103d7d69fc37cf763dfc7ee",
"assets/assets/images/PREVIEW/TEXT_4/TAIL-4-D.png": "ea9e1d3c8a104b012acd3457111bd751",
"assets/assets/images/PREVIEW/TEXT_4/TAIL-4-E.png": "1eb2e8e9008afd10a15721b5d70633c8",
"assets/assets/images/PREVIEW/TEXT_4/TAIL-4-F.png": "0da05eb79d770e94dd7d9a0b79af0cb4",
"assets/assets/images/PREVIEW/TEXT_5/GEST-5.png": "b438b4c393da83ea6c0c02049bd52bd8",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-A.png": "9368353e1fd0fee08972636eeb1df129",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-B.png": "eb70e084770843076737b9eb0a079c9c",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-C.png": "bf639a0e68af2e8d095f85a524e532c5",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-D.png": "371652e121c3c30a7813629133daef23",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-E.png": "839676ef0461bc313332d8b5999c392a",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-F.png": "716e1e33707d2482e063c209f1356576",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-G.png": "abee4c4fadef0748f1205d3b7ecd9051",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-H.png": "47c68c196256fc8e65c11e9ae79ae252",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-I.png": "e5b76d8c78cdc6ed9c70fc8714add528",
"assets/assets/images/PREVIEW/TEXT_5/HEAD-5-J.png": "b41429bab14c2cb49b0e10ee7e844226",
"assets/assets/images/PREVIEW/TEXT_5/TAIL-5-A.png": "fccba41da2d37555f4dbcb6d1e5222cc",
"assets/assets/images/PREVIEW/TEXT_5/TAIL-5-B.png": "a73a4fdb9e5fa856389ac1f88f964523",
"assets/assets/images/PREVIEW/TEXT_5/TAIL-5-C.png": "483b6cb50a336da8bf17e0312ff28d8a",
"assets/assets/images/PREVIEW/TEXT_5/TAIL-5-D.png": "b71b90f08e23a4b976669b13f63d1066",
"assets/assets/images/PREVIEW/TEXT_6/GEST-6.png": "b69696661e0e4c4ad75d80e300e7d0e7",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-A.png": "1970341116f2ddc8c06fc15f9f1ca468",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-B.png": "d670a5d60ec4be7211f8fd428e558cf0",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-C.png": "1121adb45d087ee45cd031ad3786a045",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-D.png": "8bb52c4db7cfc159d4ee61d3e8d83bde",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-E.png": "d89456474a0a4a0a5a22c3c1a9913898",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-F.png": "616120eb86dfc90c791732b9f00b698d",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-G.png": "175a51646285afe8f758d75f30db6b73",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-H.png": "67c5ac87802fad2501c396c2d353c44a",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-I.png": "67f40cfd5e8f0429e68c1c4b188bb225",
"assets/assets/images/PREVIEW/TEXT_6/HEAD-6-J.png": "1c78c57df434d3289f6e37608cde5b97",
"assets/assets/images/PREVIEW/TEXT_6/TAIL-6-A.png": "6d111178eb9e586ca2fec802f1d71d20",
"assets/assets/images/PREVIEW/TEXT_6/TAIL-6-B.png": "32677b2afbdd818d376a099a014bf2f2",
"assets/assets/images/PREVIEW/TEXT_6/TAIL-6-C.png": "4c868fb4f99b52b1a27007805369c863",
"assets/assets/images/PREVIEW/TEXT_6/TAIL-6-D.png": "ac01515fbdd6d46c8375624a7c3508a1",
"assets/assets/images/PREVIEW/TEXT_7/GEST-7.png": "f8e266a41dd6e04dc0bdf8d4608ce295",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-A.png": "b4ffd975e2ccd01aa6b3661c8fcf3789",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-B.png": "b8a41f97bb5441ba2b99cd89749ab30c",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-C.png": "09fcd7083df61b385a650464e0128ee9",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-D.png": "9c87817fd5fbe4f121ea81d2cd629a40",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-E.png": "81b8c7fd5327a62ed58d4e72968573b8",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-F.png": "0922979de6e79c67f1967d35c3de3efd",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-G.png": "80b61809879d648742ad0a3c75f39351",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-H.png": "0265fc0bdb243b18b4d75c5d8efb3da6",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-I.png": "863c761778010b1d05e20faf23fd2cb4",
"assets/assets/images/PREVIEW/TEXT_7/HEAD-7-J.png": "adfcf294be3eda26acdca0e71eb82667",
"assets/assets/images/PREVIEW/TEXT_7/TAIL-7-A.png": "181894559ece09cfb954335462346af4",
"assets/assets/images/PREVIEW/TEXT_7/TAIL-7-B.png": "cda7d5d1e8e2aef07ba2b88d5aa8400f",
"assets/assets/images/PREVIEW/TEXT_7/TAIL-7-C.png": "a8ec509a20724171d50a5351b1c4a9ad",
"assets/assets/images/PREVIEW/TEXT_7/TAIL-7-D.png": "d8ae14757cd67bfb4a0aad851327b45a",
"assets/assets/images/PREVIEW/TEXT_8/GEST-8.png": "d12aa514a2a79fbdd73b89e473806071",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-A.png": "13a2aacc739060dcca06d54f1cf7a140",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-B.png": "8b1e876315506be9b3f11369385ca419",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-C.png": "11692caf82f27f76e6f024b466285a60",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-D.png": "ae23c3d6c42623ae72ce14fde11a597d",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-E.png": "81c790146a5bfe82156d590aa3dc7e58",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-F.png": "bde255aac631e69f7a5922911aede854",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-G.png": "875eb32d50b9662878a409d0cb3e212e",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-H.png": "942a79efff759159baf75a328476d4c4",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-I.png": "cdceb184efc57b33a382d3713e3594bc",
"assets/assets/images/PREVIEW/TEXT_8/HEAD-8-J.png": "4e7c4faa95fcd34df5ae56c6397b118c",
"assets/assets/images/PREVIEW/TEXT_8/TAIL-8-A.png": "6651ff999151afbc09aaa8f95eb3d18f",
"assets/assets/images/PREVIEW/TEXT_8/TAIL-8-B.png": "e93f6f676bb755614a567ca0b4e8f46b",
"assets/assets/images/PREVIEW/TEXT_8/TAIL-8-C.png": "e5558038b973ef7428d12c001ba547b9",
"assets/assets/images/PREVIEW/TEXT_8/TAIL-8-D.png": "3293f4af94c5bb4f315ee0b30fdf6a61",
"assets/assets/images/resetbutton.png": "c44e24be45324178f2b47416087003a5",
"assets/assets/images/swampbutton.png": "f0f4dbf367ed024bcfcb00f78f044013",
"assets/assets/images/swampprofile.png": "51194281d5c55b5ee2b9e7de40fba138",
"assets/assets/images/tailicon.png": "dd0f352ef5614e60900df5404204d947",
"assets/assets/images/text01.png": "99f0389a1d5f24039a5a0d101676b163",
"assets/assets/images/text02.png": "4d99f6df76f85314887d54e176650d9e",
"assets/assets/images/text03.png": "085eedc406dde4758336f8a9952dd846",
"assets/assets/images/text04.png": "67df9f14aa2dbe44a16589fa1130a256",
"assets/assets/images/text05.png": "94d6188bac5a89a4aa7569e089fbc05a",
"assets/assets/images/text06.png": "64b528454d683f1e7a4673166ef9a266",
"assets/assets/images/text07.png": "0f723f3ead92da08bbda342c3f6cb253",
"assets/assets/images/text08.png": "add490a75190cc8038954a2106e532c7",
"assets/assets/images/TEXT_1/GEST-1.png": "0fadf25eeed336777dde2f43ae1799bd",
"assets/assets/images/TEXT_1/HEAD-1-A.png": "8fb8860e339d28c76b633cde7106ae5c",
"assets/assets/images/TEXT_1/HEAD-1-B.png": "1fdcedb9f2c9e0d4450f3922cb498a86",
"assets/assets/images/TEXT_1/HEAD-1-C.png": "ad05352e8a6e34bad05d978127f62a97",
"assets/assets/images/TEXT_1/HEAD-1-D.png": "f84c96ac8e8349377d58d4ff594a4a8f",
"assets/assets/images/TEXT_1/HEAD-1-E.png": "389a2a774e4b3610386755fa016a0c31",
"assets/assets/images/TEXT_1/HEAD-1-F.png": "f5ac74012f344381354c2250ff3dd196",
"assets/assets/images/TEXT_1/HEAD-1-G.png": "f2253cbcf3d9b6c05742285df98cf62e",
"assets/assets/images/TEXT_1/HEAD-1-H.png": "d156bd343a9906b8f571fb29ac634356",
"assets/assets/images/TEXT_1/HEAD-1-I.png": "692f169de8a81da99c4a62040527d977",
"assets/assets/images/TEXT_1/HEAD-1-J.png": "a64349882a7aeb3c5d7b1427f35c1535",
"assets/assets/images/TEXT_1/HEAD_TEXT_05.png": "3161c5c518a2758a8dcfe177b988f4f5",
"assets/assets/images/TEXT_1/TAIL-1-A.png": "df797c1c860bff9b49c4101fa0180d10",
"assets/assets/images/TEXT_1/TAIL-1-B.png": "7e8830471503e4b10c214b8740468c6e",
"assets/assets/images/TEXT_1/TAIL-1-C.png": "80f6540cd874a32aa52463cbb02ee0a3",
"assets/assets/images/TEXT_1/TAIL-1-D.png": "0c2ec5e1fb89c27bdec0e13baa02a7a9",
"assets/assets/images/TEXT_1/TAIL-1-E.png": "dfcb40c38bdbecf04cdea030ad4bafbb",
"assets/assets/images/TEXT_1/TAIL-1-F.png": "15232815c8adc8bfaecf3dc940545a1e",
"assets/assets/images/TEXT_2/GEST-2.png": "75337f8ad6d8c51d504e828f276619ef",
"assets/assets/images/TEXT_2/HEAD-2-A.png": "0648dd03597250c64c684f761db66931",
"assets/assets/images/TEXT_2/HEAD-2-B.png": "d3258f05931592bb3b8de292e6216558",
"assets/assets/images/TEXT_2/HEAD-2-C.png": "66f08fc037bc0679f222f0a4f095b115",
"assets/assets/images/TEXT_2/HEAD-2-D.png": "cad3fe17458fed63c4a4fc9cdd170e1f",
"assets/assets/images/TEXT_2/HEAD-2-E.png": "686a25543cbe694c304bc1fb307d8c4e",
"assets/assets/images/TEXT_2/HEAD-2-F.png": "b342ca112f9d4a3117a544595cdd76a2",
"assets/assets/images/TEXT_2/HEAD-2-G.png": "2b5b9ba0e19b090d20ef5a04cd00a9f9",
"assets/assets/images/TEXT_2/HEAD-2-H.png": "872feb9769708566a8da82f5cc919209",
"assets/assets/images/TEXT_2/HEAD-2-I.png": "9990cd065784af6ad0a064e9eef17539",
"assets/assets/images/TEXT_2/HEAD-2-J.png": "597ed43d32a1d79bfd647d0ad863fdba",
"assets/assets/images/TEXT_2/HEAD_TEXT_06.png": "4b3ea19d82e34ad5aa67dcaae133f3b3",
"assets/assets/images/TEXT_2/TAIL-2-A.png": "10090e70f68fd2ecf448ab16ac40bafd",
"assets/assets/images/TEXT_2/TAIL-2-B.png": "9ede950edeb20f557389158239f2e3cf",
"assets/assets/images/TEXT_2/TAIL-2-C.png": "cf40bdd996526b084ab80c5da0166ba5",
"assets/assets/images/TEXT_2/TAIL-2-D.png": "95032a3f0aef3503321e0396ea0cb116",
"assets/assets/images/TEXT_2/TAIL-2-E.png": "0603dd0d59f03f51bd85d185589e9a66",
"assets/assets/images/TEXT_2/TAIL-2-F.png": "e2caa8c07d4f46a39db4681006323e3b",
"assets/assets/images/TEXT_3/GEST-3.png": "e654fabd3c197f0676753c760c602ddb",
"assets/assets/images/TEXT_3/HEAD-3-A.png": "dc93f03720a2847daed92d8717098779",
"assets/assets/images/TEXT_3/HEAD-3-B.png": "9488c1717f2240458c8b84e427829e4f",
"assets/assets/images/TEXT_3/HEAD-3-C.png": "0f92fc84045c13cf78ce691135194545",
"assets/assets/images/TEXT_3/HEAD-3-D.png": "ddc3d8f3f659f5409aabf304e5820c35",
"assets/assets/images/TEXT_3/HEAD-3-E.png": "73ecaf1fabc9f7a5ab8ce1344d1603d6",
"assets/assets/images/TEXT_3/HEAD-3-F.png": "f966678bce9cd40ba7b1c4a8cdb2f7ec",
"assets/assets/images/TEXT_3/HEAD-3-G.png": "9064b0ea6b22f6c033aaaedde505644c",
"assets/assets/images/TEXT_3/HEAD-3-H.png": "9fa5a2cf83b7e39091a75dcead387026",
"assets/assets/images/TEXT_3/HEAD-3-I.png": "8154229ab50ce6f4cce8fbb90c6bb8f4",
"assets/assets/images/TEXT_3/HEAD-3-J.png": "b2929321c942976ffdbac76ae0962c24",
"assets/assets/images/TEXT_3/HEAD_TEXT_07.png": "70b3370efe1d7dca81df6370e0edbfc0",
"assets/assets/images/TEXT_3/TAIL-3-A.png": "e3c3aa5b8b1cd31db9c8ec4ae3903a90",
"assets/assets/images/TEXT_3/TAIL-3-B.png": "c510cd95e2836355150e827342888d82",
"assets/assets/images/TEXT_3/TAIL-3-C.png": "2380bcd7e4f9355c4e7a994903cc6dd5",
"assets/assets/images/TEXT_3/TAIL-3-D.png": "85e99e3d0098483e5d707263869b6262",
"assets/assets/images/TEXT_3/TAIL-3-E.png": "cb89938ec779d6d190e9ea626c270815",
"assets/assets/images/TEXT_3/TAIL-3-F.png": "2144fa91253865399c01e328e9f98e87",
"assets/assets/images/TEXT_4/GEST-4.png": "d8ec197a11295e1b4cfd88b9bb717ece",
"assets/assets/images/TEXT_4/HEAD-4-A.png": "c5befb453cc1c338afc767dcae8b0fe1",
"assets/assets/images/TEXT_4/HEAD-4-B.png": "def624841a3b368cddcf820192546ead",
"assets/assets/images/TEXT_4/HEAD-4-C.png": "bf48aaee00fd0058c10cdbe5e91ed1d2",
"assets/assets/images/TEXT_4/HEAD-4-D.png": "a7dbb74dceeba621da0e8b435b49c02b",
"assets/assets/images/TEXT_4/HEAD-4-E.png": "1a4f1257ff3a44e979816db771062921",
"assets/assets/images/TEXT_4/HEAD-4-F.png": "4837044ec5a6c207690c683ccd3f3d94",
"assets/assets/images/TEXT_4/HEAD-4-G.png": "fd64748a06d0612e94f1c602ffb812c3",
"assets/assets/images/TEXT_4/HEAD-4-H.png": "2754ce127594cbaeefd5e20d3c50cb75",
"assets/assets/images/TEXT_4/HEAD-4-I.png": "ad1c30be6a63e95a4408a57fb5d86464",
"assets/assets/images/TEXT_4/HEAD-4-J.png": "6ce22fb27772e15237b151732b58f315",
"assets/assets/images/TEXT_4/HEADS_TEXT_08.png": "c86238e456dc9eb3a303b0f0e8eb1780",
"assets/assets/images/TEXT_4/TAIL-4-A.png": "dc47fcfdd36510c724315e7824ef08f5",
"assets/assets/images/TEXT_4/TAIL-4-B.png": "54e1afed169857c622846842e6adc236",
"assets/assets/images/TEXT_4/TAIL-4-C.png": "4819b9de689b61a35db48bc258894dc9",
"assets/assets/images/TEXT_4/TAIL-4-D.png": "873f8b723919895394741926953e270c",
"assets/assets/images/TEXT_4/TAIL-4-E.png": "3f1941f3336d70f2cae20ef8a7444f80",
"assets/assets/images/TEXT_4/TAIL-4-F.png": "65051d1b2cb15c9ba77f9cd2fbb87112",
"assets/assets/images/TEXT_5/GEST-5.png": "02bcf870b7008a6b43bea67a95d4dc48",
"assets/assets/images/TEXT_5/HEAD-5-A.png": "e40d8ed379fcdab570097f184b405d00",
"assets/assets/images/TEXT_5/HEAD-5-B.png": "e8c8cd3cceef76d360a7f06fa6743aa0",
"assets/assets/images/TEXT_5/HEAD-5-C.png": "4056f95ae95fc5b528fbc38ab1e0787d",
"assets/assets/images/TEXT_5/HEAD-5-D.png": "ce118650ba1c21919b057610f428848a",
"assets/assets/images/TEXT_5/HEAD-5-E.png": "eeffaf8ea15d5bd16c3cb66e0fbdfac5",
"assets/assets/images/TEXT_5/HEAD-5-F.png": "2bfb93a4c8ab60d4ca615312189d277f",
"assets/assets/images/TEXT_5/HEAD-5-G.png": "2a895ea07129873e69871f0479b65443",
"assets/assets/images/TEXT_5/HEAD-5-H.png": "e8f28537b9da553b6165eb492b056056",
"assets/assets/images/TEXT_5/HEAD-5-I.png": "3930525429a2f2d4684bbe8f822f1556",
"assets/assets/images/TEXT_5/HEAD-5-J.png": "8d6fb9ae1713ab8bf6a7bd5a34cb97bf",
"assets/assets/images/TEXT_5/HEAD_TEXT_04.png": "1730f43ee793065b3c9d1b56b1cd20b5",
"assets/assets/images/TEXT_5/TAIL-5-A.png": "dd37eae5cb36d4d36e79c38201d28e76",
"assets/assets/images/TEXT_5/TAIL-5-B.png": "1ea29cdcad1dc1cfcc09b9c5061aa958",
"assets/assets/images/TEXT_5/TAIL-5-C.png": "e921ae3fb2abdde7ccd2af63141751e2",
"assets/assets/images/TEXT_5/TAIL-5-D.png": "892d89651756926dcd15bd2cc99a6f62",
"assets/assets/images/TEXT_6/GEST-6.png": "1ca8c91edea85d0c91a6e8aa007bb942",
"assets/assets/images/TEXT_6/HEAD-6-A.png": "8b219147437174574de72aec04fe33b9",
"assets/assets/images/TEXT_6/HEAD-6-B.png": "fcf03fc066be4160cf39550ec7de4336",
"assets/assets/images/TEXT_6/HEAD-6-C.png": "d964268419060967b0655128668349a9",
"assets/assets/images/TEXT_6/HEAD-6-D.png": "77ef98307b7878eca673d2c6987bdc2b",
"assets/assets/images/TEXT_6/HEAD-6-E.png": "2458f6837ab620581fc077c20df5df39",
"assets/assets/images/TEXT_6/HEAD-6-F.png": "9794ff4add2fea84dab93b492c72d9d9",
"assets/assets/images/TEXT_6/HEAD-6-G.png": "2a735865ba04cf3cb9fb60718a6fae40",
"assets/assets/images/TEXT_6/HEAD-6-H.png": "dbfa4463cf02cd200e78edb89a8309d8",
"assets/assets/images/TEXT_6/HEAD-6-I.png": "cd26eb4b416d3933df516fd25b1186a6",
"assets/assets/images/TEXT_6/HEAD-6-J.png": "93aad9502006789cffd7da6f41c18bb5",
"assets/assets/images/TEXT_6/HEAD_TEXT_03.png": "c2921314bcebb399905901e165b2fce0",
"assets/assets/images/TEXT_6/TAIL-6-A.png": "6ba27f8ec43875ff9f1243f81f739fa9",
"assets/assets/images/TEXT_6/TAIL-6-B.png": "efde7ae95ea366d28fab8bf748630eb0",
"assets/assets/images/TEXT_6/TAIL-6-C.png": "7b2b0a8cb43b85f97d701cad91f3f812",
"assets/assets/images/TEXT_6/TAIL-6-D.png": "86323db9c964f63ec9b108576598f40f",
"assets/assets/images/TEXT_7/GEST-7.png": "aae0536ede09ffc6a4df483ab3e19056",
"assets/assets/images/TEXT_7/HEAD-7-A.png": "702986d9639e0126bba52d48cde8c485",
"assets/assets/images/TEXT_7/HEAD-7-B.png": "d1e82e68056add87af2f41690bf5ec0e",
"assets/assets/images/TEXT_7/HEAD-7-C.png": "2fd453b9b0299ce0991cc6dab3019e6a",
"assets/assets/images/TEXT_7/HEAD-7-D.png": "3150bb582acb4303052ea39ec715ec4c",
"assets/assets/images/TEXT_7/HEAD-7-E.png": "683367974c11989803f9b5cbdf90ca12",
"assets/assets/images/TEXT_7/HEAD-7-F.png": "377efe0988c27f80b6565f8794c5411f",
"assets/assets/images/TEXT_7/HEAD-7-G.png": "a97f70ae76406d7f2a0be3aa2ab585be",
"assets/assets/images/TEXT_7/HEAD-7-H.png": "84c5b16cef0cef90bb24c1a3b520ea84",
"assets/assets/images/TEXT_7/HEAD-7-I.png": "cfd0f1706d3ab7ad534c236d4c99c243",
"assets/assets/images/TEXT_7/HEAD-7-J.png": "0eebcaa4c67f200062824347ec83fa07",
"assets/assets/images/TEXT_7/HEAD_TEXT_01.png": "3004489144f046a71d8cfff8af9e33e6",
"assets/assets/images/TEXT_7/TAIL-7-A.png": "da5ca0732da970a19945c7b1f2338099",
"assets/assets/images/TEXT_7/TAIL-7-B.png": "a20f7d3b42a5bbcfec4a024204b1a9c2",
"assets/assets/images/TEXT_7/TAIL-7-C.png": "8fad65a46d4b27f34f9b86cbd56c1ebc",
"assets/assets/images/TEXT_7/TAIL-7-D.png": "d5f9d56fc7611a1e10feec5ff73a01e3",
"assets/assets/images/TEXT_8/GEST-8.png": "0895089db755717e4dfa3a0f1c9716b8",
"assets/assets/images/TEXT_8/HEAD-8-1.png": "e946192ca3e968f0ad0416e87d6b80c2",
"assets/assets/images/TEXT_8/HEAD-8-A.png": "d16dc23d36f8b8479997b98b5dacd650",
"assets/assets/images/TEXT_8/HEAD-8-B.png": "abae225f6df3526e62c3d7a8e88ba194",
"assets/assets/images/TEXT_8/HEAD-8-C.png": "3adafa71ea08822558419384e16cd025",
"assets/assets/images/TEXT_8/HEAD-8-D.png": "6b061940999929d79b0d84db037a1d27",
"assets/assets/images/TEXT_8/HEAD-8-E.png": "56d5d30932bd0e9ca458cf8e354de6d7",
"assets/assets/images/TEXT_8/HEAD-8-F.png": "24c6f78d447002daa7a062f20177c5f5",
"assets/assets/images/TEXT_8/HEAD-8-G.png": "e3855bea53a2c06ad2daca923c0d64a0",
"assets/assets/images/TEXT_8/HEAD-8-H.png": "1a3ca7dbd18bb5e471b7b8b9c3bd2ead",
"assets/assets/images/TEXT_8/HEAD-8-I.png": "c9e3483184b4e4ebc89f13d0a013ea04",
"assets/assets/images/TEXT_8/HEAD-8-J.png": "7e203d4d61158fb41430ce8174135277",
"assets/assets/images/TEXT_8/TAIL-8-A.png": "7bb4e17b372683d0e2875d136f59866f",
"assets/assets/images/TEXT_8/TAIL-8-B.png": "c1769fe5b3a5980aca220c7b7e27318c",
"assets/assets/images/TEXT_8/TAIL-8-C.png": "0b741580634f7ee5083b9b14f9992d55",
"assets/assets/images/TEXT_8/TAIL-8-D.png": "bca52bd264965d49442906a0ce5e96da",
"assets/assets/images/titlebg.png": "7c38f7da0bdc8b085fe8f3ced472ccae",
"assets/assets/images/upbutton.png": "1ddd31bd5e3affe901734704cbb1a737",
"assets/assets/images/volcanobutton.png": "a436e62f006d2aefe46fb9f93a53dcd2",
"assets/assets/images/volcanoprofile.png": "3cc750c593a3dba0302801fcb5fa1f4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "3c2ab422755ea79fe85f90f32972a0fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "75e16fb803e64221671faba66c82657c",
"/": "75e16fb803e64221671faba66c82657c",
"main.dart.js": "720940ce278ef4c4e2176cf93faffc4d",
"manifest.json": "f27cbdca311d57b684b1718da77f3549",
"version.json": "bdff8fbbc9771680d3689b515c776471"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

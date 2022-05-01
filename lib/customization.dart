import 'dart:convert';
import 'dart:io';
import 'dart:ui';
import 'dart:js' as js;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:screenshot/screenshot.dart';
import 'package:path_provider/path_provider.dart';
import 'dart:typed_data';
import 'package:dio/dio.dart';
import 'package:permission_handler/permission_handler.dart';
import 'dart:html' as html;

class Customization extends StatefulWidget {
  const Customization({Key? key}) : super(key: key);

  @override
  State<Customization> createState() => _CustomizationState();
}

class _CustomizationState extends State<Customization> with SingleTickerProviderStateMixin {
  late TabController _controller;
  final key = GlobalKey();

  ScreenshotController screenshotController = ScreenshotController();
  var _race = 'swamp';
  var _texture = '1';
  var _selectedHead = 'A';
  var _selectedEye = '01';
  var _selectedFin = '';
  var _selectedTail = 'A';
  var _selectedBell = '';
  var _selectedMisc = '';
  var showPreview = false;

  List heads = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  List<Widget> headWidgets() => heads.map((head) {
    return
      GestureDetector(
        onTap: () async {
          setState(() {
            _selectedHead = head;
          });
        },
        child: Container(
          decoration: BoxDecoration(
            border: _selectedHead == head ? Border.all(width: 1.0, color: Color(0xFF526C2F)) : null,
            borderRadius: BorderRadius.circular(20.0),
            image: DecorationImage(
                image: AssetImage("assets/images/TEXT_" + _texture + "/HEAD-" + _texture + "-" + head + ".png"),
                fit: BoxFit.cover
            ),
          ),
        ),
      ); }).toList();

  List eyes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  List<Widget> eyeWidgets() => eyes.map((eye) {
    return
      GestureDetector(
        onTap: () async {
          setState(() {
            _selectedEye = eye;
          });
        },
        child: Container(
          decoration: BoxDecoration(
            border: _selectedEye == eye ? Border.all(width: 1.0, color: Color(0xFF526C2F)) : null,
            borderRadius: BorderRadius.circular(20.0),
            image: DecorationImage(
                image: AssetImage("assets/images/EYE/" + eye + ".png"),
                fit: BoxFit.cover
            ),
          ),
        ),
      ); }).toList();

  List fins = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  List<Widget> finWidgets() => fins.map((fin) {
    return
      GestureDetector(
        onTap: () async {
          setState(() {
            _selectedFin = fin;
          });
        },
        child: Container(
          decoration: BoxDecoration(
            border: _selectedFin == fin ? Border.all(width: 1.0, color: Color(0xFF526C2F)) : null,
            borderRadius: BorderRadius.circular(20.0),
            image: DecorationImage(
                image: AssetImage(fin == '' ? "assets/images/nonebutton.png" : "assets/images/EXTRUDED_BONES/" + fin + ".png"),
                fit: BoxFit.cover
            ),
          ),
        ),
      ); }).toList();

  List tailsVolcano = ['A', 'B', 'C', 'D', 'E', 'F'];
  List<Widget> tailVolcanoWidgets() => tailsVolcano.map((tail) {
    return
      GestureDetector(
        onTap: () async {
          setState(() {
            _selectedTail = tail;
          });
        },
        child: Container(
          decoration: BoxDecoration(
            border: _selectedTail == tail ? Border.all(width: 1.0, color: Color(0xFF526C2F)) : null,
            borderRadius: BorderRadius.circular(20.0),
            image: DecorationImage(
                image: AssetImage("assets/images/TEXT_" + _texture + "/ICON-TAIL-" + _texture + "-" + tail + ".png"),
                fit: BoxFit.cover
            ),
          ),
        ),
      ); }).toList();

  List tailsSwamp = ['A', 'B', 'C', 'D'];
  List<Widget> tailSwampWidgets() => tailsSwamp.map((tail) {
    return
      GestureDetector(
        onTap: () async {
          setState(() {
            _selectedTail = tail;
          });
        },
        child: Container(
          decoration: BoxDecoration(
            border: _selectedTail == tail ? Border.all(width: 1.0, color: Color(0xFF526C2F)) : null,
            borderRadius: BorderRadius.circular(20.0),
            image: DecorationImage(
                image: AssetImage("assets/images/TEXT_" + _texture + "/ICON-TAIL-" + _texture + "-" + tail + ".png"),
                fit: BoxFit.contain
            ),
          ),
        ),
      ); }).toList();

  List bells = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
  List<Widget> bellWidgets() => bells.map((bell) {
    return
      GestureDetector(
        onTap: () async {
          setState(() {
            _selectedBell = bell;
          });
        },
        child: Container(
          decoration: BoxDecoration(
            border: _selectedBell == bell ? Border.all(width: 1.0, color: Color(0xFF526C2F)) : null,
            borderRadius: BorderRadius.circular(20.0),
            image: DecorationImage(
                image: AssetImage(bell == '' ? "assets/images/nonebutton.png" : "assets/images/ACCESSORIES/ICON-ACC-" + bell + ".png"),
                fit: BoxFit.cover
            ),
          ),
        ),
      ); }).toList();

  List miscs = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
  List<Widget> miscWidgets() => miscs.map((misc) {
    return
      GestureDetector(
        onTap: () async {
          setState(() {
            _selectedMisc = misc;
          });
        },
        child: Container(
          decoration: BoxDecoration(
            border: _selectedMisc == misc ? Border.all(width: 1.0, color: Color(0xFF526C2F)) : null,
            borderRadius: BorderRadius.circular(20.0),
            image: DecorationImage(
                image: AssetImage(misc == '' ? "assets/images/nonebutton.png" : "assets/images/MISC/ICON-MISC-" + misc + ".png"),
                fit: BoxFit.cover
            ),
          ),
        ),
      ); }).toList();

  Future<String?> getDownloadPath() async {
    Directory? directory;
    try {
      if (Platform.isIOS) {
        directory = await getApplicationDocumentsDirectory();
      } else {
        directory = Directory('/storage/emulated/0/Download');
        // Put file in global download folder, if for an unknown reason it didn't exist, we fallback
        // ignore: avoid_slow_async_io
        if (!await directory.exists()) directory = await getExternalStorageDirectory();
      }
    } catch (err, stack) {
      print("Cannot get download folder path");
    }
    return directory?.path;
  }


  @override
  void initState() {
    _controller = TabController(vsync: this, length: 6);
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments as Map;
    _race = args['race'];
    _texture = args['texture'];

    return SafeArea(
      child: showPreview ? GestureDetector(
        onTap: () {
          setState(() {
            showPreview = false;
          });
        },
        child: Scaffold (
          backgroundColor: const Color(0xFF3E3E3C),
          body: Center(
            child: Container (
              width: 450,
              height: 800,
              margin: EdgeInsets.all(16.0),
              child: Stack(
                children: [
                  // if (_selectedHead != '') Image.asset('assets/images/' + 'TEXT_' + texture + '/HEAD-' + texture + '-' + _selectedHead + '.png'),
                  // Image.asset('assets/images/naga.png'),
                  // Image.asset('assets/images/naga.png'),
                  Image.asset('assets/images/PREVIEW/TEST-DARK.png'),
                  Image.asset(_race == 'swamp' ? 'assets/images/Naga-Air-01.png' : 'assets/images/Naga-Api-01.png',),
                  Image.asset('assets/images/PREVIEW/TEXT_$_texture/GEST-$_texture.png'),
                  if(_selectedFin != '') Image.asset('assets/images/PREVIEW/EXTRUDED_BONES/$_selectedFin.png'),
                  if(_selectedMisc != '') Image.asset('assets/images/PREVIEW/MISC/MISC-$_selectedMisc.png'),
                  if(_selectedBell != '') Image.asset('assets/images/PREVIEW/ACCESSORIES/ACC-$_selectedBell.png'),
                  Image.asset('assets/images/PREVIEW/TEXT_$_texture/TAIL-$_texture-$_selectedTail.png'),
                  Image.asset('assets/images/PREVIEW/TEXT_$_texture/HEAD-$_texture-$_selectedHead.png'),
                  Image.asset('assets/images/PREVIEW/EYE/EYE-$_selectedEye.png'),
                ],
              ),
            ),
          ),
        ),
      ) :  Scaffold(
        backgroundColor: const Color(0xFFFAF4ED),
        body: Center(
          child:  Container(
            width: 450,
            margin: EdgeInsets.all(16.0),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        GestureDetector(
                          onTap: () {
                            showDialog(
                              context: context,
                              builder: (BuildContext context) {
                                return AlertDialog(
                                  backgroundColor: Colors.transparent,
                                  contentPadding: EdgeInsets.zero,
                                  content: Image.asset(
                                    _race == 'swamp' ? 'assets/images/swampprofile.png' : 'assets/images/volcanoprofile.png',
                                    width: 60
                                  ),
                                );
                              },
                            );
                          },
                          child: Container(
                            child: Image.asset('assets/images/informationbutton.png', width: 40),
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            Navigator.popUntil(context, (route) => route.isFirst);
                          },
                          child: Container(
                            child: Image.asset('assets/images/homebutton.png', width: 40),
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              _selectedHead = 'A';
                              _selectedEye = '01';
                              _selectedFin = '';
                              _selectedTail = 'A';
                              _selectedBell = '';
                              _selectedMisc = '';
                            });
                          },
                          child: Container(
                            child: Image.asset('assets/images/resetbutton.png', width: 40),
                          ),
                        ),
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              showPreview = true;
                            });
                            // if(kIsWeb){
                              // RenderRepaintBoundary boundary = key.currentContext!
                              //     .findRenderObject() as RenderRepaintBoundary;
                              // var image = await boundary.toImage();
                              //
                              // ByteData? byteData = await image.toByteData(format: ImageByteFormat.png);
                              // Uint8List pngBytes = byteData!.buffer.asUint8List();
                              // final _base64 = base64Encode(pngBytes);

                              // Dio dio = new Dio();
                              // var response = await dio.download('data:application/octet-stream;base64,$_base64', 'image.png');

                              // js.context.callMethod("webSaveAs", [html.Blob([pngBytes]), "image.png"]);
                              // debugPrint(_base64);

                              // final anchor =
                              // html.AnchorElement(href: 'data:application/octet-stream;base64,$_base64')
                              //   ..download = "image.txt"
                              //   ..target = 'blank';
                              //
                              // html.document.body!.append(anchor);
                              // anchor.click();
                              // anchor.remove();

                            // }
                            // if (await Permission.storage.request().isGranted) {
                            //   final directory = await getDownloadPath();
                            //   String fileName = DateTime.now().microsecondsSinceEpoch.toString() + '.jpg';
                            //   String path = '$directory';
                            //
                            //   screenshotController.captureAndSave(
                            //       path,
                            //       fileName:fileName,
                            //       delay: const Duration(milliseconds: 10)
                            //   );
                            // }
                            // ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                            //   content: Text('Naga berhasil disimpan.'),
                            // ));
                          },
                          child: Container(
                            child: Image.asset('assets/images/downloadbutton.png', width: 40),
                          ),
                        )
                      ],
                    ),
                    GestureDetector(
                      onTap: () {
                        // exit(0);
                        Navigator.popUntil(context, (route) => route.isFirst);
                      },
                      child: Container(
                        child: Image.asset('assets/images/exitbutton.png', width: 40),
                      ),
                    )
                  ],
                ),
                SizedBox(height: 16.0),
                Screenshot(
                  controller: screenshotController,
                  key: key,
                  child: Stack(
                    children: [
                      // if (_selectedHead != '') Image.asset('assets/images/' + 'TEXT_' + texture + '/HEAD-' + texture + '-' + _selectedHead + '.png'),
                      // Image.asset('assets/images/naga.png'),
                      // Image.asset('assets/images/naga.png'),
                      Image.asset('assets/images/PREVIEW/TEST-DARK.png'),
                      Image.asset(_race == 'swamp' ? 'assets/images/Naga-Air-01.png' : 'assets/images/Naga-Api-01.png',),
                      Image.asset('assets/images/PREVIEW/TEXT_$_texture/GEST-$_texture.png'),
                      if(_selectedFin != '') Image.asset('assets/images/PREVIEW/EXTRUDED_BONES/$_selectedFin.png'),
                      if(_selectedMisc != '') Image.asset('assets/images/PREVIEW/MISC/MISC-$_selectedMisc.png'),
                      if(_selectedBell != '') Image.asset('assets/images/PREVIEW/ACCESSORIES/ACC-$_selectedBell.png'),
                      Image.asset('assets/images/PREVIEW/TEXT_$_texture/TAIL-$_texture-$_selectedTail.png'),
                      Image.asset('assets/images/PREVIEW/TEXT_$_texture/HEAD-$_texture-$_selectedHead.png'),
                      Image.asset('assets/images/PREVIEW/EYE/EYE-$_selectedEye.png'),
                    ],
                  )
                ),
                SizedBox(height: 16.0),
                Container(
                  color: const Color(0xFF98AC93),
                  child:
                    TabBar(
                      controller: _controller,
                      overlayColor: MaterialStateProperty.all<Color>(const Color(0xFF526C2F)),
                      labelPadding: const EdgeInsets.all(0.0),
                      tabs: <Widget>[
                        Tab(icon: Image.asset('assets/images/headicon.png')),
                        Tab(icon: Image.asset('assets/images/eyeicon.png')),
                        Tab(icon: Image.asset('assets/images/finicon.png')),
                        Tab(icon: Image.asset('assets/images/tailicon.png')),
                        Tab(icon: Image.asset('assets/images/bellicon.png')),
                        Tab(icon: Image.asset('assets/images/miscicon.png')),
                      ],
                  )
                ),
                Expanded(
                  child: TabBarView(
                    controller: _controller,
                    children: [
                      Container(
                          color: Color(0xFFD4DED4),
                          padding: EdgeInsets.all(16.0),
                          child: GridView.count(
                            primary: false,
                            crossAxisSpacing: 10,
                            mainAxisSpacing: 10,
                            crossAxisCount: 3,
                            shrinkWrap: true,
                            children: headWidgets(),
                            // children: [
                            //   GestureDetector(
                            //     onTap: () async {
                            //       setState(() {
                            //         _selectedState = '01';
                            //       });
                            //       Navigator.pushNamed(context, '/customization');
                            //     },
                            //     child: Container(
                            //       decoration: const BoxDecoration(
                                        // border: _selectedState == '01' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                                        // borderRadius: BorderRadius.circular(20.0),
                            //         image: DecorationImage(
                            //             image: AssetImage("assets/images/nonebutton.png"),
                            //             fit: BoxFit.cover
                            //         ),),
                            //     ),
                            //   ),
                            //   GestureDetector(
                            //     onTap: () async {
                            //     },
                            //     child: Container(
                            //       decoration: BoxDecoration(
                            //         image: DecorationImage(
                            //             image: AssetImage("assets/images/TEXT_" + texture + "/HEAD-" + texture + "-A.png"),
                            //             fit: BoxFit.cover
                            //         ),),
                            //     ),
                            //   ),
                            //   GestureDetector(
                            //     onTap: () async {
                            //     },
                            //     child: Container(
                            //       decoration: BoxDecoration(
                            //         image: DecorationImage(
                            //             image: AssetImage("assets/images/TEXT_" + texture + "/HEAD-" + texture + "-B.png"),
                            //             fit: BoxFit.cover
                            //         ),),
                            //     ),
                            //   ),
                            // ],
                          )
                      ),
                      Container(
                          color: Color(0xFFD4DED4),
                          padding: EdgeInsets.all(16.0),
                          child: GridView.count(
                            primary: false,
                            crossAxisSpacing: 10,
                            mainAxisSpacing: 10,
                            crossAxisCount: 3,
                            shrinkWrap: true,
                            children: eyeWidgets()
                          )
                      ),
                      Container(
                          color: Color(0xFFD4DED4),
                          padding: EdgeInsets.all(16.0),
                          child: GridView.count(
                            primary: false,
                            crossAxisSpacing: 10,
                            mainAxisSpacing: 10,
                            crossAxisCount: 3,
                            shrinkWrap: true,
                            children: finWidgets(),
                          )
                      ),
                      Container(
                          color: Color(0xFFD4DED4),
                          padding: EdgeInsets.all(16.0),
                          child: GridView.count(
                            primary: false,
                            crossAxisSpacing: 10,
                            mainAxisSpacing: 10,
                            crossAxisCount: 3,
                            shrinkWrap: true,
                            children: ['1', '2', '3', '4'].contains(_texture) ? tailVolcanoWidgets() : tailSwampWidgets()
                          )
                      ),
                      Container(
                          color: Color(0xFFD4DED4),
                          padding: EdgeInsets.all(16.0),
                          child: GridView.count(
                            primary: false,
                            crossAxisSpacing: 10,
                            mainAxisSpacing: 10,
                            crossAxisCount: 3,
                            shrinkWrap: true,
                            children: bellWidgets()
                          )
                      ),
                      Container(
                          color: Color(0xFFD4DED4),
                          padding: EdgeInsets.all(16.0),
                          child: GridView.count(
                            primary: false,
                            crossAxisSpacing: 10,
                            mainAxisSpacing: 10,
                            crossAxisCount: 3,
                            shrinkWrap: true,
                            children: miscWidgets()
                          )
                      ),
                    ],),
                )
              ],
            ),
          ),
        )
      )
    );
  }
}

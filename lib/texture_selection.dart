import 'package:flutter/material.dart';

class TextureSelection extends StatefulWidget {
  const TextureSelection({Key? key}) : super(key: key);

  @override
  State<TextureSelection> createState() => _TextureSelectionState();
}

class _TextureSelectionState extends State<TextureSelection> {
  var _selectedState = '1';
  var _race = 'swamp';
  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments as Map;
    _race = args['race'];
    final mediaQuery = MediaQuery.of(context);
    final size = mediaQuery.size;
    final PreferredSizeWidget appBar = AppBar(
      title: Text('Home'),
    );
    double width = mediaQuery.size.width;
    double height = mediaQuery.size.height -
        appBar.preferredSize.height -
        mediaQuery.padding.top;
    final double itemHeight = (size.height - kToolbarHeight - 24) / 2;
    final double itemWidth = size.width / 2;

    return SafeArea(
      child: Scaffold(
        backgroundColor: const Color(0xFFFAF4ED),
        body: Center(
          child: Container(
            width: 450,
            height: 800,
            margin: EdgeInsets.all(16.0),
            child: Column(
              children: [
                Align(
                  alignment: Alignment.topLeft,
                  child: GestureDetector(
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
                ),
                Image.asset('assets/images/command-texture.png', width: 240,),
                // Text("Pilih Tekstur Naga",
                //   textAlign: TextAlign.center,
                //   style:  TextStyle(color: const Color(0xFF526C2F), fontSize: 28),
                // ),
                SizedBox(height: 16.0),
                Expanded(
                  child: Container(
                    padding: EdgeInsets.fromLTRB(80, 0, 80, 0),
                    child: GridView.count(
                      primary: false,
                      crossAxisSpacing: 10,
                      mainAxisSpacing: 10,
                      crossAxisCount: 2,
                      shrinkWrap: true,
                      children: [
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '1';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '1'});
                          },
                          child: Container(
                            height: 10,
                            width: 10,
                            decoration: BoxDecoration(
                              border: _selectedState == '1' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text01.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),

                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '2';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '2'});
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              border: _selectedState == '2' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text02.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),

                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '3';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '3'});
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              border: _selectedState == '3' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text03.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),

                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '4';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '4'});
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              border: _selectedState == '4' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text04.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '5';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '5'});
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              border: _selectedState == '5' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text05.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),
                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '6';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '6'});
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              border: _selectedState == '6' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text06.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),

                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '7';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '7'});
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              border: _selectedState == '7' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text07.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),

                        GestureDetector(
                          onTap: () async {
                            setState(() {
                              _selectedState = '8';
                            });
                            Navigator.pushNamed(context, '/customization', arguments: {'race': _race, 'texture': '8'});
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              border: _selectedState == '8' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                              borderRadius: BorderRadius.circular(20.0),
                              image: const DecorationImage(
                                  image: AssetImage("assets/images/text08.png"),
                                  fit: BoxFit.cover
                              ),),
                          ),
                        ),
                      ],
                    ),
                  )
                )
              ],
            )
          ),
        )
      )
    );
  }
}

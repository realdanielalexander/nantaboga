import 'package:flutter/material.dart';

class RaceSelection extends StatefulWidget {
  const RaceSelection({Key? key}) : super(key: key);

  @override
  State<RaceSelection> createState() => _RaceSelectionState();
}

class _RaceSelectionState extends State<RaceSelection> {
  var _selectedState = 'swamp';

  @override
  Widget build(BuildContext context) {
    final mediaQuery = MediaQuery.of(context);
    final PreferredSizeWidget appBar = AppBar(
      title: Text('Home'),
    );
    double width = mediaQuery.size.width;
    double height = mediaQuery.size.height -
        appBar.preferredSize.height -
        mediaQuery.padding.top;

    return SafeArea(
      child: Scaffold(
        backgroundColor: const Color(0xFFFAF4ED),
        body: Center(
          child: Container(
            width: 450,
            height: 800,
            margin: EdgeInsets.only(top: 128.0),
            padding: EdgeInsets.symmetric(horizontal: 32.0),
            child: Column(
              children: <Widget>[
                Image.asset('assets/images/command-race.png', width: 800, height: 140, fit: BoxFit.cover,),
                // SizedBox(height: 16.0),
                GridView.count(
                    primary: false,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 10,
                    crossAxisCount: 2,
                    childAspectRatio: 0.5,
                    shrinkWrap: true,
                    children: [
                      GestureDetector(
                        onTap: () async {
                          setState(() {
                            _selectedState = 'swamp';
                          });
                          Navigator.pushNamed(context, '/texture-selection', arguments: {'race': 'swamp'});
                        },
                        child: Container(
                          decoration: BoxDecoration(
                            border: _selectedState == 'swamp' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                            borderRadius: BorderRadius.circular(28.0),
                            image: const DecorationImage(
                                image: AssetImage("assets/images/swampbutton.png"),
                                fit: BoxFit.fill
                            ),),
                        ),
                      ),
                      GestureDetector(
                        onTap: () async {
                          setState(() {
                            _selectedState = 'volcano';
                          });
                          Navigator.pushNamed(context, '/texture-selection', arguments: {'race': 'volcano'});
                        },
                        child: Container(
                          decoration: BoxDecoration(
                            border: _selectedState == 'volcano' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                            borderRadius: BorderRadius.circular(28.0),
                            image: const DecorationImage(
                                image: AssetImage("assets/images/volcanobutton.png"),
                                fit: BoxFit.fill
                            ),),
                        ),
                      ),
                    ],),
                // Expanded(
                //   flex: 3,
                //   child: Row(
                //     children: <Widget>[
                //       Expanded(
                //         child: GestureDetector(
                //           onTap: () async {
                //             setState(() {
                //               _selectedState = 'swamp';
                //             });
                //             Navigator.pushNamed(context, '/texture-selection', arguments: {'race': 'swamp'});
                //           },
                //           child: Container(
                //             decoration: BoxDecoration(
                //               border: _selectedState == 'swamp' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                //               borderRadius: BorderRadius.circular(28.0),
                //               image: const DecorationImage(
                //                   image: AssetImage("assets/images/swampbutton.png"),
                //                   fit: BoxFit.fill
                //               ),),
                //           ),
                //         ),
                //       ),
                //       SizedBox(width: 12.0),
                //       Expanded(
                //         child: GestureDetector(
                //           onTap: () async {
                //             setState(() {
                //               _selectedState = 'volcano';
                //             });
                //             Navigator.pushNamed(context, '/texture-selection', arguments: {'race': 'volcano'});
                //           },
                //           child: Container(
                //             decoration: BoxDecoration(
                //               border: _selectedState == 'volcano' ? Border.all(width: 1.0, color: const Color(0xFF526C2F)) : null,
                //               borderRadius: BorderRadius.circular(28.0),
                //               image: const DecorationImage(
                //                   image: AssetImage("assets/images/volcanobutton.png"),
                //                   fit: BoxFit.fill
                //               ),),
                //           ),
                //         ),
                //       ),
                //     ],
                //   ),
                // ),
              ],
            ),
          ),
        )
      ),
    );
  }
}

import 'package:flutter/material.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: const Color(0XFFF8F3EC),
        body: Center(
          child: Container(
            width: 450,
            height: 800,
            color: const Color(0XFFF8F3EC),
            child: Stack(
                  alignment: Alignment.center,
                  children: [
                    // ShaderMask(
                    //   blendMode: BlendMode.multiply,
                    //   shaderCallback: (Rect bounds) {
                    //     return const LinearGradient(
                    //         begin: Alignment.topCenter,
                    //         end: Alignment.center,
                    //         colors: [
                    //           Colors.black,
                    //           Colors.white
                    //         ]
                    //     ).createShader(bounds);
                    //   },
                    //   child: Container(
                    //     width: double.infinity,
                    //     height: double.infinity,
                    //     decoration: const BoxDecoration(
                    //       image: DecorationImage(
                    //           image: AssetImage("assets/images/titlebg.png"),
                    //           fit: BoxFit.cover
                    //       ),
                    //     ),),
                    // ),
                    // Positioned(
                    //   top: 80,
                    //   child: Container(
                    //     width: 240,
                    //     child: Image.asset("assets/images/logo.png")
                    //   ),
                    // ),
                    // Positioned(
                    //   bottom: 160,
                    //   child: GestureDetector(
                    //     onTap: () async {
                    //       Navigator.pushNamed(context, '/race-selection');
                    //     },
                    //     child: Container(
                    //       height: 100,
                    //       width: 140,
                    //       decoration: BoxDecoration(
                    //         borderRadius: BorderRadius.circular(20.0),
                    //         image: const DecorationImage(
                    //             image: AssetImage("assets/images/buttonmulai.png"),
                    //             fit: BoxFit.contain
                    //         ),),
                    //     ),
                    //   ),
                    //   // child: TextButton(onPressed: () {
                    //   //   Navigator.pushReplacementNamed(
                    //   //       context, '/race-selection');
                    //   // },
                    //   //     child: Text("Mulai", style: TextStyle(fontSize: 24)),
                    //   //     style: ButtonStyle(
                    //   //         padding: MaterialStateProperty.all<EdgeInsets>(EdgeInsets.symmetric(horizontal: 32, vertical: 4)),
                    //   //         foregroundColor: MaterialStateProperty.all<Color>(const Color(0xFF526C2F)),
                    //   //         backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFFFAF4ED)),
                    //   //         shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    //   //             RoundedRectangleBorder(
                    //   //                 borderRadius: BorderRadius.circular(18.0),
                    //   //                 side: BorderSide(color: const Color(0xFF526C2F))
                    //   //             )
                    //   //         )
                    //   //     )),
                    // ),
                    // Positioned(
                    //   bottom: 0,
                    //   child: Container(
                    //     height: 140,
                    //     width: 300,
                    //     decoration: BoxDecoration(
                    //       borderRadius: BorderRadius.circular(20.0),
                    //       image: const DecorationImage(
                    //           image: AssetImage("assets/images/copyright.png"),
                    //           fit: BoxFit.contain
                    //       ),),
                    //   ),
                    // ),
                    Container(
                      width: double.infinity,
                      height: double.infinity,
                      decoration: const BoxDecoration(
                        color: Color(0XFFF8F3EC)
                      ),),
                    Container(
                      width: double.infinity,
                      height: double.infinity,
                      decoration: const BoxDecoration(
                        image: DecorationImage(
                            image: AssetImage("assets/images/HOMEPAGE/BG-01.png"),
                            fit: BoxFit.fitWidth
                        ),
                      ),),
                    Container(
                      width: double.infinity,
                      height: double.infinity,
                      decoration: const BoxDecoration(
                        image: DecorationImage(
                            image: AssetImage("assets/images/HOMEPAGE/NAME-01.png"),
                            fit: BoxFit.contain
                        ),
                      ),),
                    Container(
                      width: double.infinity,
                      height: double.infinity,
                      decoration: const BoxDecoration(
                        image: DecorationImage(
                            image: AssetImage("assets/images/HOMEPAGE/TITLE-01.png"),
                            fit: BoxFit.contain
                        ),
                      ),),
                    Positioned(
                      bottom: 120,
                      child: GestureDetector(
                        onTap: () async {
                          Navigator.pushNamed(context, '/race-selection');
                        },
                        child: Container(
                          width: 140,
                          height: 100,
                          decoration: const BoxDecoration(
                            image: DecorationImage(
                                image: AssetImage("assets/images/HOMEPAGE/START-BUTTON-01-CROP.png"),
                                fit: BoxFit.contain
                            ),
                          ),),
                      ),
                    )
                  ]
                ),
          ),
        )
        ),
    );
  }
}

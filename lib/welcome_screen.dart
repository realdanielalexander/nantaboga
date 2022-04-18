import 'package:flutter/material.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Center(
          child: Container(
            width: 400,
            color: const Color(0xFF2A251E),
            child: Stack(
                  alignment: Alignment.center,
                  children: [
                    ShaderMask(
                      blendMode: BlendMode.multiply,
                      shaderCallback: (Rect bounds) {
                        return const LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.center,
                            colors: [
                              Colors.black,
                              Colors.white
                            ]
                        ).createShader(bounds);
                      },
                      child: Container(
                        width: double.infinity,
                        height: double.infinity,
                        decoration: const BoxDecoration(
                          image: DecorationImage(
                              image: AssetImage("assets/images/titlebg.png"),
                              fit: BoxFit.cover
                          ),
                        ),),
                    ),
                    Positioned(
                      top: 80,
                      child: Container(
                        width: 240,
                        child: Image.asset("assets/images/logo.png")
                      ),
                    ),
                    Positioned(
                      bottom: 160,
                      child: GestureDetector(
                        onTap: () async {
                          Navigator.pushNamed(context, '/race-selection');
                        },
                        child: Container(
                          height: 100,
                          width: 140,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20.0),
                            image: const DecorationImage(
                                image: AssetImage("assets/images/buttonmulai.png"),
                                fit: BoxFit.contain
                            ),),
                        ),
                      ),
                      // child: TextButton(onPressed: () {
                      //   Navigator.pushReplacementNamed(
                      //       context, '/race-selection');
                      // },
                      //     child: Text("Mulai", style: TextStyle(fontSize: 24)),
                      //     style: ButtonStyle(
                      //         padding: MaterialStateProperty.all<EdgeInsets>(EdgeInsets.symmetric(horizontal: 32, vertical: 4)),
                      //         foregroundColor: MaterialStateProperty.all<Color>(const Color(0xFF526C2F)),
                      //         backgroundColor: MaterialStateProperty.all<Color>(const Color(0xFFFAF4ED)),
                      //         shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      //             RoundedRectangleBorder(
                      //                 borderRadius: BorderRadius.circular(18.0),
                      //                 side: BorderSide(color: const Color(0xFF526C2F))
                      //             )
                      //         )
                      //     )),
                    ),
                    Positioned(
                      bottom: 0,
                      child: GestureDetector(
                        onTap: () async {
                          Navigator.pushNamed(context, '/race-selection');
                        },
                        child: Container(
                          height: 140,
                          width: 300,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20.0),
                            image: const DecorationImage(
                                image: AssetImage("assets/images/copyright.png"),
                                fit: BoxFit.contain
                            ),),
                        ),
                      ),
                    ),
                  ]
                ),
          ),
        )
        ),
    );
  }
}

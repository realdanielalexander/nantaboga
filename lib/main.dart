import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:nantaboga/welcome_screen.dart';
import 'package:nantaboga/race_selection.dart';
import 'package:nantaboga/texture_selection.dart';
import 'package:nantaboga/customization.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp])
      .then((_) {
    runApp(MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Nantaboga',
        home: WelcomeScreen(),
    theme: ThemeData(
    primaryColor: Color(0xFF526C2F), accentColor: Colors.black45),
        routes: {
          '/race-selection': (context) => RaceSelection(),
          '/texture-selection': (context) => TextureSelection(),
          '/customization': (context) => Customization(),
        }));
  });
}

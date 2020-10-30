import 'package:flutter/material.dart';

void main() => runApp(MonApplication());

class MonApplication extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text('Bonjour App'),
        backgroundColor: Color(0xFFB74093),
      ),
      body: Center(
        child: SingleChildScrollView(
            child: Column(
          children: [
            Text(
              'Bonjour',
              style: TextStyle(
                  color: Color(0xFFB74093),
                  fontSize: 40,
                  fontWeight: FontWeight.bold),
            ),
            Text(
              'Je suis luigi',
              style: TextStyle(
                color: Color(0xFFB74093),
                fontSize: 20,
              ),
            ),
            Image.network('https://picsum.photos/250?image=9', height: 350),
            BoutonContactezMoi(),
          ],
        )),
      ),
    ));
  }
}

class BoutonContactezMoi extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: () => showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title: Text('Contactez moi'),
              content: Text('Je suis joignable à l\'IMT Atlantique'),
            );
          }),
      child: Text(
        "Contactez moi ! svp",
      ),
    );
  }
}

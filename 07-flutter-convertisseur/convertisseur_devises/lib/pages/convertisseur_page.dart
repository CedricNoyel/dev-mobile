import '../models/devise.dart';
import '../styles.dart';
import 'package:flutter/material.dart';

class ConvertisseurDevisePage extends StatefulWidget {
  ConvertisseurDevisePage();

  @override
  State<StatefulWidget> createState() {
    return _ConvertisseurDevisePage();
  }
}

class _ConvertisseurDevisePage extends State<ConvertisseurDevisePage> {
  double _valeur;
  Devise _deviseInitial;
  Devise _deviseFinale;
  double _resultat;

  @override
  void initState() {
    super.initState();
    _valeur = 0;
    _resultat = 0;
    _deviseInitial = Devise.EURO;
    _deviseFinale = Devise.DOLLAR;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(children: [
      Spacer(),
      Text(
        'Valeur',
        style: AppStyle.labelStyle,
      ),
      Spacer(),
      TextField(
        style: AppStyle.inputStyle,
        onChanged: (val) {
          _valeur = double.parse(val);
        },
      ),
      Spacer(),
      Text('De', style: AppStyle.labelStyle),
      Spacer(),
      DropdownButton(
        value: _deviseInitial,
        isExpanded: true,
        onChanged: (newVal) => setState(() {
          _deviseInitial = newVal;
        }),
        items: Devise.values.map((Devise d) {
          return new DropdownMenuItem<Devise>(
            value: d,
            child: new Text(d.libelle),
          );
        }).toList(),
      ),
      Spacer(),
      DropdownButton(
        isExpanded: true,
        value: _deviseFinale,
        onChanged: (newVal) => setState(() {
          _deviseFinale = newVal;
        }),
        items: Devise.values.map((Devise d) {
          return new DropdownMenuItem<Devise>(
            value: d,
            child: new Text(d.libelle),
          );
        }).toList(),
      ),
      Spacer(flex: 2),
      RaisedButton(
          onPressed: () => setState(() {
                _resultat =
                    _valeur * taux[_deviseFinale] / taux[_deviseInitial];
              }),
          child: Text('Convertir')),
      Spacer(flex: 2),
      Text(_resultat.toString(), style: AppStyle.labelStyle),
      Spacer()
    ]));
  }
}

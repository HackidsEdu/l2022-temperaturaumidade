HackbitOLEDDisplay.init(128, 64)
hackbit.selectTempType(hackbit.tempType.celsius)
hackbit.queryData(
hackbit.DHTtype.DHT11,
DigitalPin.P13,
true,
false,
true
)
basic.showIcon(IconNames.Yes)
HackbitOLEDDisplay.writeString("Temp:")
HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.temperature))
HackbitOLEDDisplay.writeString("Umid:")
HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.humidity))

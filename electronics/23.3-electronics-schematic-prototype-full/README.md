This is the first full schematic for the avionics of the rocket.
It contains:
- USB C port for data and power
- Voltage step down converter to 3.3V
- RP2040 microcontroller with components necessary for its function
- MPU6000 accelerometer and gyroscope module
- NEO-M8M GPS module
- MPL115A1 digital barometer module
- E22-400MM22S LoRa 400 Mhz radio transmitter module
All of the modules communicate with the microcontroller via an SPI bus
This is a very rough prototype, and I probably made a lot of mistakes. Everything will most likely be remade from scratch according to the documentationand double-checked.
I had to create a custom symbol for the LoRa module. All of the custom symbols, and later footprints, will be placed into their respective update folders.

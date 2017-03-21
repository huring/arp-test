var arp = require('arpjs')

console.log("Starting up");

// List of known devices
var devices = [
	{ name: "Test device", mac: "54:9f:13:56:26:00" },
	{ name: "Kalles iPhone", mac: "a8:20:66:11:61:d4"}
];

// Check devices on network
arp.table(function(err, table) {
	console.log(table);


	for (var i = 0; i < table.length; i++) {
		
		// Check if device is on known list
		var dev = devices.filter(function(item) { 
		    if (item.mac == table[i].mac)
		    	return item.name;

		});

		if (dev.length > 0) {
			console.log(dev[0].name);
		} else {

			console.log(table[i].ip + " - unknown device on network…");

		};

	}


});

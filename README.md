## Carbonfootprint
RESTFul API to calculate carbon emission.

Carbon Footprint is currently a browser extension (for Chrome, Firefox and Safari) that calculates CO2 emissions incurred when driving (or using public transportation) on routes suggested by map services such as Google Maps, Here and Open Street Map. To do that, we implemented functions (in Javascript) that convert distance, time, fuel type and other inputs into CO2. These functions are potentially useful for other projects as well, but they are currently not accesible outside Carbon Footprint. We would like to transform these useful functions into two APIs:


A javascript API consisting of a single and well-documented Javascript file that could be imported by other projects. (This is expected to be easy and just a matter of refactoring code that we already have.)
A RESTful web API that would allow clients to submit GET requests containing inputs such as distance, time and fuel type and obtain the corresponding CO2 emissions as response in JSON.

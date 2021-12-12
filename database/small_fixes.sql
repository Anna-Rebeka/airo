DELETE FROM flights WHERE price <= 20;

UPDATE cities
SET image = 'bratislava',
	info = 'Bratislava is the capital and largest city of Slovakia.
			Officially, the population of the city is about 440,000; however, it is estimated to be more than 660,000
			- approximately 150% of the official figures. Bratislava is in southwestern Slovakia at the foot of the Little Carpathians,
			occupying both banks of the River Danube and the left bank of the River Morava. Bordering Austria and Hungary,
			it is the only national capital that borders two sovereign states.'
WHERE name = 'Bratislava';


UPDATE cities
SET image = 'prague',
	info = 'Prague is the capital and largest city in the Czech Republic, the 13th largest city in the European Union and the historical
			capital of Bohemia. ... Situated on the Vltava river, Prague is home to about 1.3 million people, while its metropolitan area
			is estimated to have a population of 2.7 million.'
WHERE name = 'Prague';


UPDATE cities
SET image = 'tokyo',
	info = 'Tokyo, formerly (until 1868) Edo, city and capital of Tokyo to (metropolis) and of Japan. It is located at the head of Tokyo Bay
			on the Pacific coast of central Honshu. It is the focus of the vast metropolitan area often called Greater Tokyo, the largest urban
			and industrial agglomeration in Japan..'
WHERE name = 'Tokyo';


UPDATE cities
SET image = 'rome',
	info = 'Rome, Italian Roma, historic city and capital of Roma provincia (province), of Lazio regione (region), and of the country of Italy.
			Once the capital of an ancient republic and empire whose armies and polity defined the Western world in antiquity and left seemingly
			indelible imprints thereafter, the spiritual and physical seat of the Roman Catholic Church, and the site of major pinnacles
			of artistic and intellectual achievement, Rome is the Eternal City, remaining today a political capital, a religious centre,
			and a memorial to the creative imagination of the past.'
WHERE name = 'Rome';


UPDATE cities
SET image = 'newyork',
	info = 'New York is the largest and most influential American metropolis, encompassing Manhattan and Staten islands, the western sections
				of Long Island, and a small portion of the New York state mainland to the north of Manhattan. New York City is in reality a collection
				of many neighbourhoods scattered among the city’s five boroughs—Manhattan, Brooklyn, the Bronx, Queens, and Staten Island—each exhibiting
				its own lifestyle. Moving from one city neighbourhood to the next may be like passing from one country to another.'
WHERE name = 'New York';


UPDATE cities
SET image = 'paris',
	info = 'Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more
			than 105 square kilometres  Since the 17th century, Paris has been one of Europe\'s major centres of finance, diplomacy, commerce, fashion,
			gastronomy, science, and arts.'
WHERE name = 'Paris';


UPDATE cities
SET image = CONCAT('default', FLOOR(RAND() * 10)),
	info = 'A city is a large human settlement. It can be defined as a permanent and densely settled place with administratively defined boundaries
			whose members work primarily on non-agricultural tasks. Cities generally have extensive systems for housing, transportation, sanitation,
			utilities, land use, production of goods, and communication. Their density facilitates interaction between people, government organisations
			and businesses, etc.'
WHERE image IS NULL;

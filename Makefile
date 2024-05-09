install:
	brew install gdal
	brew link gdal
	pip download =3.8.5
	tar -xpzf GDAL-3.8.5.tar.gz
	cd GDAL-3.8.5
	python setup.py build
	python setup.py install
	cd ..
	poetry install
	poetry shell
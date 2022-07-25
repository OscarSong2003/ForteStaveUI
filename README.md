# ForteStaveUI

An application that help facilitate and streamline basic natural language processing/machine learning processes.

# Demonstration 

A quick video demo is available here: https://drive.google.com/file/d/1DNjq7KPCJaYCWUPN9VucaKZy6kYJRYqL/view?usp=sharing (fallback: https://youtu.be/GvS-qwK28wo). 

# Tools used

The front-end is written in React, and the backend is written in Django. Two machine learning libraries are employed: Forte and Stave, 
which this project is also primarily made for. The remote processing is conducted in Forte, and the final rendering uses Stave's annotation
tool. The processors are written in Python. 

# General Application Flow
1) Users will first upload a config yaml file which specifies both the input, output, and intermediary processing components
2) The app will then render the respective number of specified components, allowing the user to freely drag and resize components
   depending on their preference
3) The app will then walk through the processing process, printing out result of the modified data 

# Current Usage

Currently, the pipeline only supports the processing of text inputs, but will likely be expanded to support other commodities. 

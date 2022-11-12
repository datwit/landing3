---
title: preprocess
summary: preprocess is a python3 package for text preprocessing. Is based on NLTK, Stanford NLP models, and other less popular NLP python libraries.
img: /images/cases/preprocess.png
category: Data Analysis
tags: 
    - text
    - python
    - wrangling
date: 2020-09-29T19:05:27.220Z
author: Abel Meneses Abad 
reading: 10 
---


`Preprocess` is a python 3 package for text preprocessing. It is based on `NLTK`, `Stanford NLP` models, and other less known NLP Python libraries.

Preprocess was created as a personal project in 2014 to facilitate my PhD experiments. Currently, it is a library that simplifies NLP work and a continuously developing project to further optimize research and work on text processing pipelines.

### Who is preprocess for?
Data scientists who want to test the impact of different preprocessing techniques on NLP tasks written in python language.
Students who want to start experimenting with text preprocessing in an easy way.

## The challenge

In 2011, when I started to experiment with text manipulation and python, NLP was the most popular library or framework in the ecosystem, mainly because of its ease of use. At the same time, Stanford NLP models were very well known and I was starting to explore python programming. So, I decided to combine both in a single line of career development.

Exploring other NLP frameworks and libraries I came across the NLTK toolkit, a wonderful tool for teaching, and working in, computational linguistics. Unfortunately for me,  my native language is Spanish and NLTK did not have a whole lot of capabilities to work with it. The Belgium software pattern was very versatile for languages like Spanish, but a python 3 compatible version was never developed. My personal take on this is that the exponential growth of the python language made it more profitable to use open source libraries freely available on platforms like github or other python communities than the paid alternatives. At this point, I started to recognize the need for a library that was more tailored to my needs and the spanish speaking NLP community.

Another important reason for developing this library was my personal need to develop my own skills in python while at the same time being able to return something useful to the community, a resource that would be helpful for new learners going through the same stages I went through.

Moving away from the romanticism of my learning process and into the weeds of NLP, I can tell you that vectorization is a huge technique to improve big text datasets analysis. But, for small text collections and school projects the conversion of, for example, [a beautiful text] to the sequence [1, 56, 12] - which means the frequency of every word in a dictionary - is not a trivial task. So, one of my objectives was to maintain the input as a human readable literal string, to allow the practitioner to visually compare the similarities and differences between two of them. I was working on text similarity problems at the moment so I thought it was a good starting point for my development project.

Spacy library has become popular in the last few years, I had never heard about it until I was finishing version 0.3, for that reason preprocess does not support spacy models or objects in any of its versions. Spacy is optimized using Cython language, and has support for Spanish, so I consider this will be the last goal to reach regarding text-preproc dependencies.

My intentions are to achieve a good level of documentation and organization for the library to make it easy on future users and developers to continue improving/extending its features and techniques. As of today, I am not sure if the use of object oriented programing (OOP) philosophy is the correct approach to follow, but, until I or someone else is able to answer that question I will continue its development the same way.

## Solution

Preprocess is a python package for preprocessing text using some NLP techniques:

* Normalization techniques (Eg. url recognition, etc)
* Punctuation patterns recognition
* Symbol filtering and substitution
* Shallow NLP techniques (Eg. Part of Speech Tagging)
* Deep NLP techniques (Eg. Name Entity Recognition, etc)

The python ecosystem for text preprocessing is large and difficult to configure and use. When I started to use preprocessing for some more complex NLP task, the process to configure and generate standalone apps with non heavy dependencies was impossible using nltk as a baseline. At the same time every normalization step taken from a different approach/library have a different input type and arguments. For that reason I decided to wrapped all those functions in a standard and unified library named preprocess, which works as follow:

```python
from preprocess import func
func('text')
'text_result'
```

This package integrates some text normalization techniques from some python packages likes: _nltk_, _normalizr_. Also contains many ideas extracted from other normalization or text preprocessing packages.

Some regular expressions used on shallow parsing are based on observations made from frequent errors in txt obtained from pdf conversion.

Additionally some functions intend to keep the original length of the text after normalization. E.gs. _'state-of-the-art'_ by _'state\_of\_the\_art'_; _'doing... some'_ by _'doing    some'_ (there are 4 whitespaces between _doing_ and _some_).  The objective was to wrangling the data (not munging it), not in all cases this objective was get it, some [alignment examples](https://github.com/sorice/2017paraphrasebsent/02.2-Jaccard-Align-Preproc-to-Original-Sent.ipynb) can be read.

### Basic Usage

```python
>>> import preprocess
>>> preprocess.lowercase('Stanford parser was created by Stanford University')
'stanford parser was created by stanford university'
```

Basic usage includes the following functions:

* lowercase, replace_urls, abbreviations, expand_contractions, ngrams
* replace_symbols: based on recognition of unicode & utf8 representations of Greek symbols, etc. 
* replace_punctuation: based on punctuation regular expressions
* multipart_words: or hyphenated expressions.
* some non-classical text manipulation operations such those made to easy parse the texts obtained from PDF:
  * extraspace_for_endingpoints: add an extra whitespace before the ending point of a sentence.
  * add_doc_ending_point: check if the last sentence of a doc ends with a dot, if not add it.
  * del_tokens_len_one: a primariy way to make stopword removal

Advanced usage includes the following functions:

* pos, ner, syntdp, sngrams, remove_stopword, contextual_ngrams, stopword_ngrams

### Future

The future changes of this library are based in the initial objectives:

1. A __pure python library__: at this version the Stanford models dependency, developed in java,  made this milestone impossible.

    - The future: replace with spacy, or pntl or any other self deep learning tagging implementation with a free and professional collection of texts.

2. __Optimization__ to get better times in processing big collections of data: many functions are in pure python:

    - The future: implement pure python funcs in cython or rust.

3. __Standard Input__: many libraries, ideas or codes reused in this library have different ways to get the inputs (numerical vectors, strings, set of words, etc), the objective is to pass a simple string or a well known _ObjectType_ like _TfIdfModel_.

    - The future: check if the input is a string distance and with a decorator change all kind of object type to string.

4. __Low-weight__: to have the less possible dependencies for academical or commercial use deployment, and the least possible complexity.

    - The future: avoid the nltk dependency or any other, reusing the necessary code and fixing them to integrate them on _preprocess architecture_.

5. __Integration__: add every preprocessing technique mentioned in the papers of SEMEVAL or CLEF to solve _Reused Text Detection_ or _Semantic Text Similiarity_, and other fundamental papers in this area.

    - __Citation__: add a complete set of cites about all techniques, and link them with its correspondent function on the library.


> To see the full Github study case go [**here**](https://github.com/datwit/preprocess)


> The image of this work is licensed under Datwit LLC Copyright 


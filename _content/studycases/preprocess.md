---
title: preprocess
summary: preprocess is a python3 package for text preprocessing. Is based on NLTK, Stanford NLP models, and other less popular NLP python libraries.
img: /images/cases/preprocess.png
tags: 
    - Data Science
date: 2020-09-29T19:05:27.220Z
author: Abel Meneses Abad 
reading: 10 
---


preprocess is a Python3 package for text preprocessing. It is based on NLTK, Stanford NLP models, and other less popular NLP Python libraries.

preprocess was created as a personal project in 2014 to facilitate my PhD experiments. Currently, it is just a library that simplifies my work and a developing project to optimize my investigation and work text experiment pipelines.

### Who is preprocess for?
* Data scientists who want to test the impact of different preprocessing techniques on NLP tasks in Python.
* Students who want to start doing text preprocessing the easy way.
## Challenge

In 2011 when I started to play with texts and python, NLP was the must popular library in python ecosystem. Stanford models were very well known and I was starting on python programming.

My modern language is Spanish, and NLTK still have lot of no capabilities for this language. The Belgium software _Pattern_ was very versitile for languages like Spanish, but unfortunately the version for python3 never was developed, my hunch is because the fast grows of python community made more profitable the use of open source libraries abailable on github or other python organizations.

Another important reason for the developing of this library was my personal need to develop my own skills in python, and at the very end this was a way to return to the community something useful for early learners as a new resource to push them to the same stages I went through.

Vectorization is a huge technique to improve big text datasets analysis, but for small collections and scholl projects the conversion of "a beatifull text" to the sequence [1, 56, 12], which means the frecuency of every word in a certain dictionary, it is not so obvious. So one of my final purpouse was to maintain the input as a literal string human readable, to allow the practitioner to compare visually the similarities between two strings. I was working from the beginning in text similarity problems so was a good reason from my point of view.

Even version 0.3 does not support spacy models or objects, because was one of my last discoveries. Spacy is very optimized with Cython, and has support for Spanish, so I consider this will be the last goal to reach inside text-preproc compatibilities.

My intentions are to let the library very well documented for future students, and to let everything very organized to be extended with new techniques or to optimize current functions. Even today, I don't know if OOP philosophy could be better, but in case I (or someone else) answer that question I will do what is right.

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


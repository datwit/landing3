---
title: Considerations on Obsidian from a Cuban engineer’s perspective
summary: Learn how Obsidian canbe used for research and work offline and some other plugins and tips to get started with this amazing note taking tool.
tags: 
- "Research"
- "Tips"
img: /images/blog/obsidian.png
date: 2021-08-21T09:05:27.220Z
author: Enma Lidia Muñoz García
reading: 20
---

## The discovery

I am from Cuba, a place where still in 2021 the internet is considered a luxury that only a few can afford. So, I studied most of my student life without having a computer, cellphone, or internet, because those things didn't exist back then. When I finally had those in college I had such a little internet that I could only use it to search for things I need to study. As a software engineer, I was not able to enjoy the wonders of the internet like an engineer suppose to do on a daily basis. In my college time, I remember using tools like Scrapbook, Zotero, Mendeley, always trying to save the websites and articles that I could use to study and to write my papers. I loved Scrapbook for so many years, but end up losing the data I gathered with it, and with that all of my memories about endless subjects. Since that time I was always dreaming of finding the tool I could use to create my own space of knowledge about things, I tried all the free tools I could find but none of it stuck to me.

Time went by and I was able to use the internet and with that get the best out of my career, even though isn't as good as in any other country.

So, one day I was doing an online course at Domestika and I was introduced to Notion and so my productivity journey began. I felt amazed by everything about organizing your time and life and I thought Notion could be the right place to dump all the things I found and read on the internet, just like I used to do with Scrapbook; only this time it was an online tool and therefore I wouldn't be losing anything anymore.

Notion proved to be an amazing tool, its simplicity, and powerful customizability blew my mind. But the more I used it, I started to suffer from its huge loading time and my slow internet wasn't enough to use it.

Then Youtube recommended me this video:

[Obsidian: The Most Secure Notion Alternative (not sponsored)](https://www.youtube.com/watch?v=ms4cWMsOITs)

That's when I found Obsidian.

## What is Obsidian?

Obsidian is a note-taking app from the makers of Dynalist, also known and loved by many to-do list practitioners. Even though is a young app, its developers have many years of experience in the making of productivity products. Overnight, under the siege of the pandemic, this application built a great community of lovers and collaborators behind it and a promising future is on sight.

Obsidian deep down it's a markdown editor that claims to be "A second brain, for you, forever." At first glance, people might consider it as an IDE for note-taking for its appearance, features, and customizability.

It's based on three major principles:

- Local-first
- Link as a first-class citizen
- Make it super extensible

Obsidian, most definitely, can be used for everything you can imagine, but **it is not a to-do list app**, because it goes way beyond that. Its note linking feature is its main attraction, which is widely used for the Zettelkasten note-taking method.

Zettelkasten's Niklas Luhmann is a knowledge management method based on note-taking for studying and researching. It is the process of acquiring information from many sources to produce your outcome of ideas, which results in knowledge acquisition. You're not supposed to copy and paste from those resources, but to generate your unique ideas. Then establish a network of linked ideas that can grow over time as long as you keep adding more and more knowledge and experience.

To get a better look at how Obsidian works I recommend checking out these videos:

* [Obsidian for Beginners: Start HERE — How to Use the Obsidian App for Notes](https://www.youtube.com/watch?v=QgbLb6QCK88)

* [OBSIDIAN: Getting Started, Facts & Pricing](https://www.youtube.com/watch?v=bLoukY64gYk)

* [My 2020 Comprehensive Obsidian Workflow For Zettelkasten and Evergreen Notes](https://www.youtube.com/watch?v=Ewhfok91AdE)

After all of the above and quite a bunch of videos on Youtube, I'm finally started to see the magic behind Obsidian, this time I thought going locally was the way to go, to prove myself in control of my life and my things, protect them, and take out, at last, the best of it and become the professional I was always wanted to be.
If you are not a person who likes to write maybe this tool isn't for you, but if you're willing to give it a try Obsidian can be:

* The tool that encourages you to write your simple daily tasks to organize your work.

* The place where to take notes of useful things you want to remember over time.

* Your accessible space to write your insights about work and life alike, your resolutions and accomplishments.

## My setup

### Instalation

First things first, downloading and installing [Obsidian](https://obsidian.md/)

Follow the app assistant to create a "New Vault".

<figure>
  <img
    src="/images/blog/Create-New-Vault.png"
    alt="Create a new vault"
  />  
</figure>


Once you have created your vault name and file save location, you will be brought to your workplace.

### Customization

Like some of the most popular development IDEs, Obsidian has a lot of room for customizing your workspace, we can go to ``Settings => Appearance`` to check out its features.

There you can use one of the community themes or make your own using CSS snippets.

For the first time using the app, I chose the theme "Dracula for Obsidian" by jarodise. I'm sure in the future I will be using many more.

<figure>
  <img
    src="/images/blog/dracula-for-obsidian.png"
    alt="Dracula for Obsidian"
  />  
</figure>

### Plugins

Obsidian has some default plugins you can enable from ``Settings => Core plugins``. Also, there's a bunch of plugins developed by the community that you can use, just disable the "Safe mode" on ``Settings => Community plugins``, and then browse away.

My top picks so far are:

* Calendar: This plugin is a must for viewing, visualizing, and navigating between your daily notes. If you use the Core Daily Note plugin a calendar will appear on the right sidebar so you can create daily notes on click.

* Checklist: This plugin consolidates checklists from across files into a single view, that way you can easily see all of your tasks. It's available on the right sidebar, only you have to configure a tag to assign to your tasks blocks and the plugin will capture the tasks from there.

* Emoji toolbar: This allows you to quickly search for and add emojis to your editor. Add a shortcut to insert the emojis for the command "Emoji Toolbar: open emoji picker" on ``Settings => Hotkeys``.

* Templater: A template language that lets you insert variables and functions results into your templates. A common way to insert a more advanced date/time. The official documentation and how to use it is available [here](https://silentvoid13.github.io/Templater/docs/).

* Slated: Task management plugin used to schedule, move and repeat a task. To use it you have to go to the task you want to make the operation on, and there open the command palette, type "slated" and there select the choice you want.

* Advanced tables: Add improved navigation, formatting, and manipulation to markdown tables.

> Tip: To insert checkboxes for tasks, only you have to use the shortcut ``Ctrl + Enter``

### Templates

In Obsidian you can make your own templates, tailored to your needs. Firstly you have to enable Templates from ``Settings => Core plugins``. Then choose where you want to store your templates on ``Settings => Templates``. I created a folder named Templates for that and also changed the date format to DD-MM-YYYY.

To add a template more easily you can create a shortcut like ``Ctrl+T``. Add it from ``Settings => Hotkeys``

### Import data from Notion

The next challenge is to import my notes from Notion. Thank God they have that covered through their [official help](https://help.obsidian.md/How+to/Import+data), which leads to the community where a collaborator made a [solution](https://github.com/connertennery/Notion-to-Obsidian-Converter) for this particular case.

After moving all the data from Notion to my Obsidian directory I realized that there were way too many things there I didn't even use and my tables and relations were a mess. So instead of fixing all that I decided to make my own structure for Obsidian and use it the best way for me.

### Structure

After discovering and following for a while [Ali Abdaal](https://www.youtube.com/user/Sepharoth64), he opened for me a new world of possibilities when it comes to productivity, that's how I discovered PARA.

PARA is considered a Universal System for Organizing Digital Information. It helps you organized everything you have to do and all the information relevant to it.

P.A.R.A. stands for **Projects — Areas — Resources — Archives**.

* Project: This is a series of tasks related to a goal.

* Area of responsibility: It is a sphere of your life with activities that you can maintain over time. Examples might include: Health, Finances, Professional Development, Travel, Hobbies, Friends, etc.

* Resource: A topic or theme of ongoing interest.

* Archives: Inactive items from the other three categories.

I believe this method resonates with me, so, what better way to use it than through Obsidian.

Therefore let's established the following resolutions to apply:

- Create a folder named Projects with a list of pre-established projects to do. Those are going to be our linked topics to relate with our notes.
- Create and use tags to make a list of pre-established areas of responsibility. These tasks will be used on our notes.
- Create a folder named Resources where to store all of the gathered data to produce new content. Keep here data for outgoing projects. This content will be also linked in our notes.
- Create a folder named Archives where to store all the resources and content of finished projects.

>Tip: The tags must be written without spaces if they have more than one word, and with a leading ``#`` without space. For example, ``#work``.

### Syncing           

According to [Obsidian official help](https://help.obsidian.md/Obsidian/iOS+app), you can sync your data by using:

- [iCloud Drive Sync](https://help.obsidian.md/Obsidian/iOS+app#iCloud%20Drive%20Sync)
Available for Apple users.
- [Obsidian Sync](https://help.obsidian.md/Obsidian/iOS+app#Obsidian%20Sync)
This is a feature you get by using Obsidian paid subscriptions.

Luckily in the community, you can find a solution using [Git](https://forum.obsidian.md/t/obsidian-github-integration-for-sync-and-version-control/6369) if you don't want to use any of the above.

## How does an engineer in Cuba can make the best use of Obsidian

An engineer located in Cuba cannot always rely on the internet connection available in the country. That's where the offline goodness of Obsidian comes to play a big part. We can use it to store pieces of content found on the web, so we can have it available at any time on our computers to produce our work even if we are disconnected.
Of course, we have to be aware and make sure to also save the URL references and make the proper attribution to the author just to avoid copyright issues.

The next challenge is how to capture content from the web to import into our Obsidian workspace.

### [Markdown Web Clipper](https://forum.obsidian.md/t/markdownload-markdown-web-clipper/173)

According to the owner ", this is an extension to clip websites and download them into a readable markdown file. Please keep in mind that it is not guaranteed to work on all websites."

Because Obsidian keeps locally safe your notes, the plugin can't insert the content directly into your notes, so you'll have to copy and paste the content.

I'm pretty confident that this time around with Obsidian I'll succeed in improving my everyday workflow.



Introduction
---------------
A simple Cucumber and JS based test automation framework, developed for a demo purpose.


Development Environment setup:
--------------------------------
Node JS >= 12
Java >= 8 (for Selenium Standalone server)


How to execute
------------------
1.Clone this repo,
2. Navigate to root folder.
3. Execute 'npm install'. It will install all dependencies and a node_modules folder would be created in the root directoty.
4. Execute 'npm test' command in terminal window
5. You will find a folder with report genrated.
6. Open the index.html file to open the report

Areas to be improved
--------------------
Due to time constraint, all features are not implemented, To improve the framework we may need to consider below factors

1. Use implicit/explicit wait whereever required instead of 'pause' command.
2. Try to use better locagors whereever possible (prefer for @name , @id ). Use custom attribute for test automation if available as a high preference.
3. Add page objects to maintain it when the program grows and have more number of scenairos.
4. Add @tags to cucumber features like @sanity / @regression to execute specific sceniaros whenever required.
5. Add json/xml report to implement part of DevOps pipeline and to be read by tools like Jenkins/Bamboo.
6. Add browser capabilities for headless to improve execution speed
7. Add more error handling to make the step defintion functions robust.
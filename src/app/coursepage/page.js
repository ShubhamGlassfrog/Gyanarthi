'use client'
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import Image from 'next/image';
import admisiions from "../../../public/admissions.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Homegallery from '@/Components/Homegallery/Homegallery';
import edge from '../../../public/edge.png';
import Footer from '@/Components/Footer/Footer';
import image1 from "../../../public/international.png"
import image2 from "../../../public/banking.png"
import image3 from "../../../public/financial.png"
import image4 from "../../../public/taxation.png"
import image5 from "../../../public/finearts.png"
import image6 from "../../../public/animationdesign.png"
import image7 from "../../../public/fashiondesign.png"
import image8 from "../../../public/journalism.png"
import wp from "../../../public/wp.png"
import apply from "../../../public/apply.png"
import download from "../../../public/download.png"
import FAQSection from '../FAQ/FAQSection';






const Page = () => {

    const courses = [



        {
            name: "BCom",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Taxation, International Business, Banking and Finance, and Financial Accounting. The courses at the Gyanarthi Media College are affiliated with the Kumaun University and the curriculum is curated with a vision to make it one of the prime options for best course after 12 Commerce. The students can check the BCom Course Details subsequently to get comprehension of the specifications of each specialization domain. ",
            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "Gyanarthi's B.Com program offers a meticulously designed Banking and Finance specialization, aimed at providing students with comprehensive knowledge and skills in this field. Integrated seamlessly into the structured curriculum of the Bachelor of Commerce program, this specialization caters to the evolving demands of the banking sector. Students delve deep into topics such as financial analysis, risk management, investment strategies, and banking regulations, gaining a nuanced understanding of the intricacies of modern banking practices.Through a blend of theoretical insights and practical applications, the Banking and Finance specialization equips students with the expertise needed to excel in various roles within the banking industry.From understanding financial markets to navigating regulatory frameworks, students receive rigorous training that prepares them for the complexities of real- world banking operations.Whether aspiring to become financial analysts, investment bankers, or risk managers, graduates of this specialization emerge ready to make significant contributions to the financial sector.Join Gyanarthi's B.Com program with a specialization in Banking and Finance and embark on a rewarding journey towards a successful career in the dynamic world of banking.",
            tabpanel2: "Financial Accounting stands as a distinct domain within the academic landscape, offering students a specialized skill set to navigate the complexities of financial reporting and analysis.At Gyanarthi Media College, students delve deep into the principles of accounting, learning to interpret financial data, prepare accurate reports, and gain insights into investment strategies.Through a rigorous curriculum that blends theoretical foundations with practical applications, students acquire the knowledge and skills needed to excel in the field of financial accounting.Gyanarthi Media College goes beyond theoretical teachings, emphasizing practical learning experiences that enable students to apply their knowledge effectively in real- world scenarios.From analyzing financial statements to developing investment plans, students are equipped with the tools and techniques necessary to make informed financial decisions.With a focus on hands - on learning and experiential activities, students graduate from Gyanarthi Media College's Financial Accounting program with the confidence and competence to succeed in diverse professional settings. Join us and embark on a journey towards mastering the art and science of financial accounting, preparing yourself for a rewarding career in the dynamic world of finance.",
            tabpanel3: "At Gyanarthi Media College, students have the opportunity to delve into the intricacies of taxation through the specialized stream offered within the Bachelor of Commerce program. With a comprehensive curriculum, students are equipped with the knowledge and skills necessary to navigate various aspects of taxation, including financial accounting, direct taxation, indirect taxation, and auditing. Through a blend of theoretical learning and practical applications, students gain a deep understanding of tax laws and regulations, preparing them for roles in taxation consultancy, financial management, and auditing firms.While focusing on specialized areas of taxation, Gyanarthi Media College ensures that students maintain a strong foundation in traditional commerce concepts.By integrating core principles of commerce into the taxation specialization, students develop a holistic understanding of business operations and financial management.With an emphasis on practical learning experiences and industry- relevant skills, students graduate with the expertise to excel in diverse career paths within the taxation field.Join us at Gyanarthi Media College and embark on a journey to become a proficient tax professional, equipped to make significant contributions to the financial sector.",
            tabpanel4: "The field of International Business is experiencing a surge in demand within the commercial market, making it an attractive domain for aspiring professionals. For students aiming to pursue careers in multinational corporations and global enterprises, Gyanarthi offers a specialized program - the B.Com in International Business. This program provides students with comprehensive insights into the dynamics of global markets, international trade, and cross-cultural management, equipping them with the knowledge and skills required to navigate the complexities of conducting business on a global scale.At Gyanarthi, we go beyond theoretical learning and emphasize practical application of concepts.Through industry- relevant case studies, real - world projects, and internship opportunities, students gain hands - on experience in dealing with the challenges and opportunities of international business operations.Our faculty, comprising experienced professionals and experts in the field, provide mentorship and guidance to help students develop a deep understanding of international business practices and strategies.By the end of the program, students emerge as competent professionals capable of making informed decisions and driving success in the global business landscape.Join us at Gyanarthi and embark on a transformative journey towards a rewarding career in International Business.",
            faqs: [
                {
                    question: 'Which is the best course after 12 Commerce?',
                    answer: 'A Bachelor of Commerce course is an undergraduate programme typically pursued after completing 12th with commerce stream. Pursuing the BCom degree will expose you to the difficulties of the business world.'
                },
                {
                    question: 'What are the important BCom course details to be known?',
                    answer: 'During the course, students learn about the principles of financial management and accounting—an exploration of the global market and international trade dynamics. Learn statistical analysis and business forecasting. '
                },
                {
                    question: 'What is the duration of a BCom Degree?',
                    answer: 'The duration of a BCom degree program is typically three years, although it can vary depending on different institutions. Some universities offer post-graduate programs or options for specialization, which may extend the duration of the course.'
                }
            ]
        },


        {
            name: "BCom Taxation",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Taxation, International Business, Banking and Finance, and Financial Accounting. The courses at the Gyanarthi Media College are affiliated with the Kumaun University and the curriculum is curated with a vision to make it one of the prime options for best course after 12 Commerce. The students can check the BCom Course Details subsequently to get comprehension of the specifications of each specialization domain. ",

            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "Gyanarthi's B.Com program offers a meticulously designed Banking and Finance specialization, aimed at providing students with comprehensive knowledge and skills in this field. Integrated seamlessly into the structured curriculum of the Bachelor of Commerce program, this specialization caters to the evolving demands of the banking sector. Students delve deep into topics such as financial analysis, risk management, investment strategies, and banking regulations, gaining a nuanced understanding of the intricacies of modern banking practices.Through a blend of theoretical insights and practical applications, the Banking and Finance specialization equips students with the expertise needed to excel in various roles within the banking industry.From understanding financial markets to navigating regulatory frameworks, students receive rigorous training that prepares them for the complexities of real- world banking operations.Whether aspiring to become financial analysts, investment bankers, or risk managers, graduates of this specialization emerge ready to make significant contributions to the financial sector.Join Gyanarthi's B.Com program with a specialization in Banking and Finance and embark on a rewarding journey towards a successful career in the dynamic world of banking.",
            tabpanel2: "Financial Accounting stands as a distinct domain within the academic landscape, offering students a specialized skill set to navigate the complexities of financial reporting and analysis.At Gyanarthi Media College, students delve deep into the principles of accounting, learning to interpret financial data, prepare accurate reports, and gain insights into investment strategies.Through a rigorous curriculum that blends theoretical foundations with practical applications, students acquire the knowledge and skills needed to excel in the field of financial accounting.Gyanarthi Media College goes beyond theoretical teachings, emphasizing practical learning experiences that enable students to apply their knowledge effectively in real- world scenarios.From analyzing financial statements to developing investment plans, students are equipped with the tools and techniques necessary to make informed financial decisions.With a focus on hands - on learning and experiential activities, students graduate from Gyanarthi Media College's Financial Accounting program with the confidence and competence to succeed in diverse professional settings. Join us and embark on a journey towards mastering the art and science of financial accounting, preparing yourself for a rewarding career in the dynamic world of finance.",
            tabpanel3: "At Gyanarthi Media College, students have the opportunity to delve into the intricacies of taxation through the specialized stream offered within the Bachelor of Commerce program. With a comprehensive curriculum, students are equipped with the knowledge and skills necessary to navigate various aspects of taxation, including financial accounting, direct taxation, indirect taxation, and auditing. Through a blend of theoretical learning and practical applications, students gain a deep understanding of tax laws and regulations, preparing them for roles in taxation consultancy, financial management, and auditing firms.While focusing on specialized areas of taxation, Gyanarthi Media College ensures that students maintain a strong foundation in traditional commerce concepts.By integrating core principles of commerce into the taxation specialization, students develop a holistic understanding of business operations and financial management.With an emphasis on practical learning experiences and industry- relevant skills, students graduate with the expertise to excel in diverse career paths within the taxation field.Join us at Gyanarthi Media College and embark on a journey to become a proficient tax professional, equipped to make significant contributions to the financial sector.",
            tabpanel4: "The field of International Business is experiencing a surge in demand within the commercial market, making it an attractive domain for aspiring professionals. For students aiming to pursue careers in multinational corporations and global enterprises, Gyanarthi offers a specialized program - the B.Com in International Business. This program provides students with comprehensive insights into the dynamics of global markets, international trade, and cross-cultural management, equipping them with the knowledge and skills required to navigate the complexities of conducting business on a global scale.At Gyanarthi, we go beyond theoretical learning and emphasize practical application of concepts.Through industry- relevant case studies, real - world projects, and internship opportunities, students gain hands - on experience in dealing with the challenges and opportunities of international business operations.Our faculty, comprising experienced professionals and experts in the field, provide mentorship and guidance to help students develop a deep understanding of international business practices and strategies.By the end of the program, students emerge as competent professionals capable of making informed decisions and driving success in the global business landscape.Join us at Gyanarthi and embark on a transformative journey towards a rewarding career in International Business.",
            faqs: [
                {
                    question: 'Which is the best degree for taxation?',
                    answer: 'One of the most suitable degrees for those aiming to pursue a career in taxation is BCom in Taxation. This program provides specialized knowledge in tax laws, regulations, and practices, preparing students for roles in tax advisory, compliance, and planning.'
                },
                {
                    question: 'What subjects are covered in the BCom taxation course?',
                    answer: 'Subjects covered in the BCom Taxation course are the principle of taxation, income tax laws and regulations, corporate taxation, indirect taxes, tax planning and management, taxation of specific sectors or industries etc.  '
                },
                {
                    question: 'What are the career opportunities for BCom in taxation?',
                    answer: 'BCom in Taxation has many job options. They can work as tax advisors in companies or accounting firms, and become tax analysts or managers in government offices. Others might help individuals or businesses plan their taxes, research tax laws or policies, and teach about taxes in schools or training centres.'
                }
            ]
        },


        {
            name: "BCom Banking and Finance",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Taxation, International Business, Banking and Finance, and Financial Accounting. The courses at the Gyanarthi Media College are affiliated with the Kumaun University and the curriculum is curated with a vision to make it one of the prime options for best course after 12 Commerce. The students can check the BCom Course Details subsequently to get comprehension of the specifications of each specialization domain. ",

            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "Gyanarthi's B.Com program offers a meticulously designed Banking and Finance specialization, aimed at providing students with comprehensive knowledge and skills in this field. Integrated seamlessly into the structured curriculum of the Bachelor of Commerce program, this specialization caters to the evolving demands of the banking sector. Students delve deep into topics such as financial analysis, risk management, investment strategies, and banking regulations, gaining a nuanced understanding of the intricacies of modern banking practices.Through a blend of theoretical insights and practical applications, the Banking and Finance specialization equips students with the expertise needed to excel in various roles within the banking industry.From understanding financial markets to navigating regulatory frameworks, students receive rigorous training that prepares them for the complexities of real- world banking operations.Whether aspiring to become financial analysts, investment bankers, or risk managers, graduates of this specialization emerge ready to make significant contributions to the financial sector.Join Gyanarthi's B.Com program with a specialization in Banking and Finance and embark on a rewarding journey towards a successful career in the dynamic world of banking.",
            tabpanel2: "Financial Accounting stands as a distinct domain within the academic landscape, offering students a specialized skill set to navigate the complexities of financial reporting and analysis.At Gyanarthi Media College, students delve deep into the principles of accounting, learning to interpret financial data, prepare accurate reports, and gain insights into investment strategies.Through a rigorous curriculum that blends theoretical foundations with practical applications, students acquire the knowledge and skills needed to excel in the field of financial accounting.Gyanarthi Media College goes beyond theoretical teachings, emphasizing practical learning experiences that enable students to apply their knowledge effectively in real- world scenarios.From analyzing financial statements to developing investment plans, students are equipped with the tools and techniques necessary to make informed financial decisions.With a focus on hands - on learning and experiential activities, students graduate from Gyanarthi Media College's Financial Accounting program with the confidence and competence to succeed in diverse professional settings. Join us and embark on a journey towards mastering the art and science of financial accounting, preparing yourself for a rewarding career in the dynamic world of finance.",
            tabpanel3: "At Gyanarthi Media College, students have the opportunity to delve into the intricacies of taxation through the specialized stream offered within the Bachelor of Commerce program. With a comprehensive curriculum, students are equipped with the knowledge and skills necessary to navigate various aspects of taxation, including financial accounting, direct taxation, indirect taxation, and auditing. Through a blend of theoretical learning and practical applications, students gain a deep understanding of tax laws and regulations, preparing them for roles in taxation consultancy, financial management, and auditing firms.While focusing on specialized areas of taxation, Gyanarthi Media College ensures that students maintain a strong foundation in traditional commerce concepts.By integrating core principles of commerce into the taxation specialization, students develop a holistic understanding of business operations and financial management.With an emphasis on practical learning experiences and industry- relevant skills, students graduate with the expertise to excel in diverse career paths within the taxation field.Join us at Gyanarthi Media College and embark on a journey to become a proficient tax professional, equipped to make significant contributions to the financial sector.",
            tabpanel4: "The field of International Business is experiencing a surge in demand within the commercial market, making it an attractive domain for aspiring professionals. For students aiming to pursue careers in multinational corporations and global enterprises, Gyanarthi offers a specialized program - the B.Com in International Business. This program provides students with comprehensive insights into the dynamics of global markets, international trade, and cross-cultural management, equipping them with the knowledge and skills required to navigate the complexities of conducting business on a global scale.At Gyanarthi, we go beyond theoretical learning and emphasize practical application of concepts.Through industry- relevant case studies, real - world projects, and internship opportunities, students gain hands - on experience in dealing with the challenges and opportunities of international business operations.Our faculty, comprising experienced professionals and experts in the field, provide mentorship and guidance to help students develop a deep understanding of international business practices and strategies.By the end of the program, students emerge as competent professionals capable of making informed decisions and driving success in the global business landscape.Join us at Gyanarthi and embark on a transformative journey towards a rewarding career in International Business.",

            faqs: [
                {
                    question: 'What are the career prospects after completing the course in BCom Financial Accounting?',
                    answer: 'After pursuing your degree in BCom Financial Accounting, you can work as an accountant, auditor, or tax advisor in companies or accounting firms. You can also pursue roles in financial analysis, budgeting, or compliance. The experience will advance you to managerial positions or specialize in areas like forensic accounting or risk management.'
                },
                {
                    question: 'Which BCom course is best for banking?',
                    answer: 'The best BCom course for banking is BCom in Banking and Finance. This program focuses specifically on banking operations, financial markets, and investment strategies, preparing students for careers in banking, investment banking, or financial services. The topics covered are banking principles, financial analysis, risk management, and regulatory compliance. '
                },
                {
                    question: 'What is the duration of the BCom Banking and Finance course?',
                    answer: 'The duration of the BCom Banking and Finance course is typically three years for the undergraduate program. However, some institutions may offer programs for longer periods depending on their course requirements.'
                }
            ]
        },


        {
            name: "BCom Financial Accounting",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Taxation, International Business, Banking and Finance, and Financial Accounting. The courses at the Gyanarthi Media College are affiliated with the Kumaun University and the curriculum is curated with a vision to make it one of the prime options for best course after 12 Commerce. The students can check the BCom Course Details subsequently to get comprehension of the specifications of each specialization domain. ",

            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "Gyanarthi's B.Com program offers a meticulously designed Banking and Finance specialization, aimed at providing students with comprehensive knowledge and skills in this field. Integrated seamlessly into the structured curriculum of the Bachelor of Commerce program, this specialization caters to the evolving demands of the banking sector. Students delve deep into topics such as financial analysis, risk management, investment strategies, and banking regulations, gaining a nuanced understanding of the intricacies of modern banking practices.Through a blend of theoretical insights and practical applications, the Banking and Finance specialization equips students with the expertise needed to excel in various roles within the banking industry.From understanding financial markets to navigating regulatory frameworks, students receive rigorous training that prepares them for the complexities of real- world banking operations.Whether aspiring to become financial analysts, investment bankers, or risk managers, graduates of this specialization emerge ready to make significant contributions to the financial sector.Join Gyanarthi's B.Com program with a specialization in Banking and Finance and embark on a rewarding journey towards a successful career in the dynamic world of banking.",
            tabpanel2: "Financial Accounting stands as a distinct domain within the academic landscape, offering students a specialized skill set to navigate the complexities of financial reporting and analysis.At Gyanarthi Media College, students delve deep into the principles of accounting, learning to interpret financial data, prepare accurate reports, and gain insights into investment strategies.Through a rigorous curriculum that blends theoretical foundations with practical applications, students acquire the knowledge and skills needed to excel in the field of financial accounting.Gyanarthi Media College goes beyond theoretical teachings, emphasizing practical learning experiences that enable students to apply their knowledge effectively in real- world scenarios.From analyzing financial statements to developing investment plans, students are equipped with the tools and techniques necessary to make informed financial decisions.With a focus on hands - on learning and experiential activities, students graduate from Gyanarthi Media College's Financial Accounting program with the confidence and competence to succeed in diverse professional settings. Join us and embark on a journey towards mastering the art and science of financial accounting, preparing yourself for a rewarding career in the dynamic world of finance.",
            tabpanel3: "At Gyanarthi Media College, students have the opportunity to delve into the intricacies of taxation through the specialized stream offered within the Bachelor of Commerce program. With a comprehensive curriculum, students are equipped with the knowledge and skills necessary to navigate various aspects of taxation, including financial accounting, direct taxation, indirect taxation, and auditing. Through a blend of theoretical learning and practical applications, students gain a deep understanding of tax laws and regulations, preparing them for roles in taxation consultancy, financial management, and auditing firms.While focusing on specialized areas of taxation, Gyanarthi Media College ensures that students maintain a strong foundation in traditional commerce concepts.By integrating core principles of commerce into the taxation specialization, students develop a holistic understanding of business operations and financial management.With an emphasis on practical learning experiences and industry- relevant skills, students graduate with the expertise to excel in diverse career paths within the taxation field.Join us at Gyanarthi Media College and embark on a journey to become a proficient tax professional, equipped to make significant contributions to the financial sector.",
            tabpanel4: "The field of International Business is experiencing a surge in demand within the commercial market, making it an attractive domain for aspiring professionals. For students aiming to pursue careers in multinational corporations and global enterprises, Gyanarthi offers a specialized program - the B.Com in International Business. This program provides students with comprehensive insights into the dynamics of global markets, international trade, and cross-cultural management, equipping them with the knowledge and skills required to navigate the complexities of conducting business on a global scale.At Gyanarthi, we go beyond theoretical learning and emphasize practical application of concepts.Through industry- relevant case studies, real - world projects, and internship opportunities, students gain hands - on experience in dealing with the challenges and opportunities of international business operations.Our faculty, comprising experienced professionals and experts in the field, provide mentorship and guidance to help students develop a deep understanding of international business practices and strategies.By the end of the program, students emerge as competent professionals capable of making informed decisions and driving success in the global business landscape.Join us at Gyanarthi and embark on a transformative journey towards a rewarding career in International Business.",
            faqs: [
                {
                    question: 'What is the syllabus for BCom Financial Accounting?',
                    answer: 'In BCom Financial Accounting, students learn about basic accounting rules, making financial statements, tracking what a company owns and owes, calculating how assets lose value over time, understanding financial ratios, and getting introduced to auditing. They also study accounting rules and laws to ensure reports are accurate. This helps students develop skills to keep track of money transactions, analyze them, and understand how well a company is doing financially.'
                },
                {
                    question: 'What are the subjects covered in BCom Financial Accounting?',
                    answer: 'The subjects covered in BCom Financial Accounting teach essential subjects like financial, cost, and management accounting, business math, economics, laws, tax rules, auditing, financial management, and business communication. This diverse curriculum prepares students with a strong understanding of finance and accounting principles, preparing them for a wide range of roles in the finance and accounting sectors. '
                },
                {
                    question: 'Which is the best course for learning finance?',
                    answer: 'The best course for learning finance is BCom in Finance. It teaches about money matters, investments, and financial management. The course covers topics like banking, investment analysis, risk management, and financial markets. It is a great choice for careers in banking, investment, or corporate finance.'
                }
            ]
        },


        {
            name: "BCom International Business",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Taxation, International Business, Banking and Finance, and Financial Accounting. The courses at the Gyanarthi Media College are affiliated with the Kumaun University and the curriculum is curated with a vision to make it one of the prime options for best course after 12 Commerce. The students can check the BCom Course Details subsequently to get comprehension of the specifications of each specialization domain. ",

            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "Gyanarthi's B.Com program offers a meticulously designed Banking and Finance specialization, aimed at providing students with comprehensive knowledge and skills in this field. Integrated seamlessly into the structured curriculum of the Bachelor of Commerce program, this specialization caters to the evolving demands of the banking sector. Students delve deep into topics such as financial analysis, risk management, investment strategies, and banking regulations, gaining a nuanced understanding of the intricacies of modern banking practices.Through a blend of theoretical insights and practical applications, the Banking and Finance specialization equips students with the expertise needed to excel in various roles within the banking industry.From understanding financial markets to navigating regulatory frameworks, students receive rigorous training that prepares them for the complexities of real- world banking operations.Whether aspiring to become financial analysts, investment bankers, or risk managers, graduates of this specialization emerge ready to make significant contributions to the financial sector.Join Gyanarthi's B.Com program with a specialization in Banking and Finance and embark on a rewarding journey towards a successful career in the dynamic world of banking.",
            tabpanel2: "Financial Accounting stands as a distinct domain within the academic landscape, offering students a specialized skill set to navigate the complexities of financial reporting and analysis.At Gyanarthi Media College, students delve deep into the principles of accounting, learning to interpret financial data, prepare accurate reports, and gain insights into investment strategies.Through a rigorous curriculum that blends theoretical foundations with practical applications, students acquire the knowledge and skills needed to excel in the field of financial accounting.Gyanarthi Media College goes beyond theoretical teachings, emphasizing practical learning experiences that enable students to apply their knowledge effectively in real- world scenarios.From analyzing financial statements to developing investment plans, students are equipped with the tools and techniques necessary to make informed financial decisions.With a focus on hands - on learning and experiential activities, students graduate from Gyanarthi Media College's Financial Accounting program with the confidence and competence to succeed in diverse professional settings. Join us and embark on a journey towards mastering the art and science of financial accounting, preparing yourself for a rewarding career in the dynamic world of finance.",
            tabpanel3: "At Gyanarthi Media College, students have the opportunity to delve into the intricacies of taxation through the specialized stream offered within the Bachelor of Commerce program. With a comprehensive curriculum, students are equipped with the knowledge and skills necessary to navigate various aspects of taxation, including financial accounting, direct taxation, indirect taxation, and auditing. Through a blend of theoretical learning and practical applications, students gain a deep understanding of tax laws and regulations, preparing them for roles in taxation consultancy, financial management, and auditing firms.While focusing on specialized areas of taxation, Gyanarthi Media College ensures that students maintain a strong foundation in traditional commerce concepts.By integrating core principles of commerce into the taxation specialization, students develop a holistic understanding of business operations and financial management.With an emphasis on practical learning experiences and industry- relevant skills, students graduate with the expertise to excel in diverse career paths within the taxation field.Join us at Gyanarthi Media College and embark on a journey to become a proficient tax professional, equipped to make significant contributions to the financial sector.",
            tabpanel4: "The field of International Business is experiencing a surge in demand within the commercial market, making it an attractive domain for aspiring professionals. For students aiming to pursue careers in multinational corporations and global enterprises, Gyanarthi offers a specialized program - the B.Com in International Business. This program provides students with comprehensive insights into the dynamics of global markets, international trade, and cross-cultural management, equipping them with the knowledge and skills required to navigate the complexities of conducting business on a global scale.At Gyanarthi, we go beyond theoretical learning and emphasize practical application of concepts.Through industry- relevant case studies, real - world projects, and internship opportunities, students gain hands - on experience in dealing with the challenges and opportunities of international business operations.Our faculty, comprising experienced professionals and experts in the field, provide mentorship and guidance to help students develop a deep understanding of international business practices and strategies.By the end of the program, students emerge as competent professionals capable of making informed decisions and driving success in the global business landscape.Join us at Gyanarthi and embark on a transformative journey towards a rewarding career in International Business.",
            faqs: [
                {
                    question: 'What is the syllabus for International Business in BCom?',
                    answer: 'The BCom International Business syllabus includes global trade, cross-border transactions, multinational business operations, international marketing, supply chain management, finance, business strategy, trade laws, cultural dimensions, and global economic trends. Students also learn foreign languages and gain practical experience through internships or study abroad programs, preparing them for careers in the global marketplace.'
                },
                {
                    question: 'What is the scope after the BCom International Business course?',
                    answer: 'After BCom International Business, graduates can work in multinational corporations, export-import companies, global logistics firms, or government departments focusing on foreign trade. They can become international marketing managers, export-import managers, supply chain analysts, business consultants, trade analysts, or foreign market researchers, offering diverse career paths in the global business field.'
                },
                {
                    question: 'What is the importance of International Business in today’s global economy?',
                    answer: "In today's world, International Business is super important.It helps companies trade goods, services, and money worldwide.This lets them explore new markets, find different talents, and use global resources for new ideas and growth.International trade also boosts economies, creates jobs, and brings cultures together.Knowing how to do business internationally is key for companies to succeed globally."
                }
            ]
        },
        {
            name: "BA Journalism and Mass Communication",
            description: "The Journalism and Mass Communication course at the Gyanarthi Media College at Kashipur is a dynamic undergraduate degree designed to help students with the skills necessary to navigate the fast-paced world of media. The mass communication course offers a structured education in an array of media domains such as print, digital, television, and radio. We focus on building a strong foundation in journalistic practices, ethics, and research techniques for our students. At Gyanarthi, the students learn to craft compelling news stories, conduct effective interviews, and formulate multimedia content.We ensure that they are able to gain a deep understanding of the impact of media on society and culture which shall assist them in curating a very specific career in the future.The coursework for the bachelor degree in journalism and mass communication at the Gyanarthi Media College integrates theoretical learning with practical application.Our students are prepared to work on practical projects as we provide them with real - time experience and internships.We ensure that the students are able to build professional networks and inculcate practical skills before they are all set to move to the market to move ahead with professional commitments.This degree not only prepares students for careers in journalism and communications but also helps them build critical thinking and communication skills.",
            specialization: "The students at Gyanarthi Media College are well-equipped to move forward and prepare themselves for the fields of mass communication and media studies. The curriculum at the Gyanarthi Media College is extensive and well-crafted for building careers in the right direction. Our students are thoroughly taught to navigate through the challenges in the Media and Communication world. At Gyanarthi, the faculty focuses on helping the students with domains such as Television Broadcasting and Radio Broadcasting. We make sure that our students are equipped with the appropriate knowledge in the domains of Print Journalism and even the basics of Photography. This helps the students gain ample acumen to practically test their knowledge in the domains of Journalism and Mass Communication. Gyanarthi Media College is a competent institute for mass communication that equips students with the right amount of knowledge to work in the fields of Advertising and Public Relations. We ensure that our students are up to date in subjects such as Social Sciences, Indian Polity and Society, Media Research, Media Law and Ethics, Functional Hindi, and Functional English as this shall assist them in going forward with activities in Media Planning, Management, and execution very smoothly. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the relative domains of Mass Communication and Media Studies. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Class 12th in the field of Journalism and Mass Communication. The students can check all the details of the bachelor degree in journalism and mass communication to get a comprehension of what it has to offer to the students.",

            tab1: "Television Journalism ",
            tab2: "Radio Broadcasting ",
            tab3: "Advertising  ",
            tab4: "PR and Corporate Communication",
            tabpanel1: "The students at Gyanarthi aim to be Journalists at established firms and companies in the Television Industry. Thus, in order to provide them with the right amount of knowledge in the arena of Data Journalism, Photography, Media Research, Media Laws and Ethics, Media Planning and Management, Advertising, and other sectors. This prepares students with the appropriate information to move forward in their careers.",
            tabpanel2: "For the students of Journalism and Mass Communication, Gyanarthi Media College ensures that the students are prepared for the Radio domains as it forms a very necessary core for Journalism studies. Furthermore, as students who are studying mass communication, it is necessary that they understand the levels of communication and the application of tools in this sector. Gyanarthi prepares students for everything and Radio Broadcasting is one of them.",
            tabpanel3: "It is necessary to understand for the students that the basics of advertising form a very important part of the journalism curriculum. Students at Gyanarthi are prepared for the journalism world while keeping them intact with the importance of Advertising. Starting from the basics to the core, the faculty at Gyanarthi ensures that the students know everything.",
            tabpanel4: "The curriculum of Journalism and Mass Communication Courses at the Gyanarthi Media College is very balanced. It is intricately designed to keep up with the latest market requirements, and Public Relations is one of them. The students are prepared well to navigate through Corporate Communication and Public Relations roles while they study BA Journalism and Mass Communication. ",
            faqs: [
                {
                    question: 'What is B.A. Journalism and Mass Communication Course about?',
                    answer: 'B.A. Journalism and Mass Communication teaches about mass media and communication, including journalism, broadcasting, advertising, and digital media. Students learn news reporting, media writing, interviewing, media law, and management. It aims to prepare students for jobs in media and communication fields by developing essential skills in these areas.'
                },
                {
                    question: "What is the scope of the Journalism and Mass Communication Course?",
                    answer: 'After Mass Communication course, graduates can work in journalism (print, broadcast, digital), TV and radio production, advertising, public relations, corporate communications, content creation, digital media management, media research, and consulting. Jobs after master of journalism & mass communication can be found in newspapers, magazines, TV networks, radio stations, ad agencies, PR firms, digital media companies, and corporate communication departments.'
                },
                {
                    question: 'What is the qualification needed for a bachelor degree in journalism and mass communication?',
                    answer: "The qualification needed for an institute for mass communication typically includes completing 12th grade. Masters in journalism and mass communication is the next step after under-graduation. Additionally, proficiency in the language of instruction (usually English) and strong communication skills are essential. Admission processes may include entrance exams, interviews, or submission of portfolios, depending on the institution's requirements."
                }
            ]
        },
        {
            name: "BSc Fashion Designing",
            description: "The Fashion and Designing Course at the Gyanarthi Media College is well- curated to help students build their dream careers in the fashion world.In the city of Kashipur, Gyanarthi happens to be one of the top choices for the fashion course.The reason for the same is the kind of curriculum that the college provides to the students.The Bachelor of Science in Fashion Designing is very effectively structured to assist students beginning from the basics to the complexes of the Fashion World.At the Gyanarthi Media College, the compounded concepts are explained to the students in the most simple world.The students are nurtured with knowledge in the domains of Indian Textiles, Fashion Trends, History of Clothing, and many much more.This enables the students gain a comprehensive knowledge of the important domains they must be aware of while they practice fashion professionally.Our students grow to be fashion designers, analysts, buyers, textile designers, and other major roles in many bcommendable workspaces across the nation.",
            specialization: "The BSc in Fashion Designing is a three- year undergraduate course.It is a course filled with creativity, innovation and endless opportunities.For aspiring fashion enthusiasts BSc in Fashion Designing is a perfect course.It is a foundation to explore the multifaceted world of designs, textiles and trends.The Gyanarthi Media College’s Fashion Designing Course promises to give students an experience of industry’s technical aspects with its state - of - the - art infrastructure.The college provides variety of hands - on labs and access to specialised equipment for their training.These labs include pattern - making, pattern drafting, interior drafting, and draping, providing practical experience in creating and transforming garment patterns and designs.The labs are equipped with industrial sewing machines, interlocking machines, and supporting equipment, ensuring students have the tools they need to bring their creativity into lively designs.Further, we make sure that our students are well - equipped with the knowledge of textiles such as Chikankari, Zardosi, Kalamkari, and many others.The faculty at Gyanarthi is highly conscientious of the information that they extend to the students as they believe that the students must be prepare for the corporate world while being constantly in touch with the traditional as well as the modern approaches.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the relative domains of Fashion and Designing Course. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Class 12th in the field of Fashion. The students can check all the details of the fashion designing course to get a comprehension of what it has to offer to the students.",

            tab1: "Pattern-Making Labs ",
            tab2: "Pattern Drafting Labs ",
            tab3: "Interior Drafting Labs ",
            tab4: "Draping Labs",
            tabpanel1: "At Gyanarthi, we have specific pattern-making labs which help students develop a specific understanding of the fashion industry and its pertinence with pattern-making. The students equip themselves with the understanding of the blueprinting of patterns. Further, they are able to nurture their comprehension of factors such as the type of fabric, intended silhouette, and many other things that they require to build a successful career in fashion.",
            tabpanel2: "Equipped with top equipment for Pattern drafting, the Pattern Drafting Lab at Gyanarthi is focused on giving the students the right environment to carefully frame the basis of their fashion design journey. Pattern drafting is a very meticulous process as it inculcates an understanding of personalities, forms, models, and other specifications in order to draft the right pattern.",
            tabpanel3: "To compose the 2D model of the designs that the students are willing to draft, it is necessary that they are able to get spaces such as Interior Drafting Labs. They help the students clearly understand the way they have to employ the types of equipment and how they must use the tools in order to complete the respective jobs. The students are further encouraged to take up the latest trends and get an understanding of the latest trends and market requirements. ",
            tabpanel4: "Draping forms the core of fashion design studies. Thus it is necessary that the students have the exact understanding of every technique. This is a very tedious job for which absolute concentration is much needed. The students must be able to work with the exact equipment in the needed direction to go through the steps of the intricate draping process. ",
            faqs: [
                {
                    question: 'What is a BSc in Fashion designing?',
                    answer: 'A Fashion and Designing course is an undergraduate degree program that focuses on the study of fashion design, garment construction, textiles, fashion illustration, pattern making, fashion merchandising, and fashion marketing. Students with the skills and knowledge create innovative and marketable clothing designs and succeed in the fashion industry.'
                },
                {
                    question: "What is the duration of the B.Sc. in Fashion Designing course?",
                    answer: 'The duration of the B.Sc. in Fashion Designing course typically ranges from three to four years, which may differ in institutions. A masters degree in fashion design is a post-graduate program after an undergraduate degree. Most programs follow a semester system, with each academic year divided into two semesters.'
                },
                {
                    question: 'What is the scope after doing a B.Sc in Fashion Designing course?',
                    answer: "Graduates of B.Sc in Fashion design can pursue careers as fashion designers, stylists, merchandisers, illustrators, textile designers, or entrepreneurs. They can also get into roles in marketing, branding, retail management, journalism, costume design, or event management within the global fashion industry, offering diverse career paths in both domestic and international markets"
                }
            ]
        },
        {
            name: "Bachelor of Fine Arts BFA",
            description: "The students at the Gyanarthi Media College are inspired to choose their fields of interest and build a career in the same. The domain of Fine Arts is one of the most creative fields. However, the options of courses that solely focus on the same are very limited. At Gyanarthi, we allow the students to explore the Fine Arts with finesse and comprehensive techniques. The Bachelor of Fine Arts course is supported by an intensive curriculum which is affiliated with the University of Kumaun, Nainital and is recognized by the University Grants Commission. For building a career in creative fields, a very supportive environment and structure of the course are required. This structure must be backed by thorough techniques and expertise that our experienced faculty brings to the table. The Bachelor of Fine Arts Course at the Gyanarthi Media College aims to assist students in building the careers they have always dreamt of. ",
            specialization: "Bachelor of Fine Arts Courses are available with four specializations at the Gyanarthi Media College. These domains are very balanced and curated in order to build expertise in one of the four leading domains of the field. The students can either choose Painting, Sculpture, Applied Arts, or Photography in order to choose the course of their career. The curriculum in each of the specializations is highly specific while also providing a general idea of the basics of Fine Arts. The four specializations are more inclined towards equipping the students with the right amount of knowledge they need so as to build careers in different industries within the Fine Arts field. The students pursue Painting to take up fields that require intricate brush work while those who take up Sculpting are more adept in moulding. Applied Arts primarily focuses on the domain of Graphic Design and related artistical works while the Photography arena deals with a meticulous understanding of the frames and visual adjustments. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Painting, Sculpting, Applied Arts, and Photography. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Class 12th in the field of Fine Arts. The students can check the Bachelor of Fine Arts Course subsequently to get a comprehension of the specifications of each specialization domain that the College has to offer to the students.",

            tab1: "BFA in Painting  ",
            tab2: "BFA in Sculpture ",
            tab3: "BFA in Applied Arts",
            tab4: "BFA in Photography ",
            tabpanel1: "Painting is one of the prime and most pursued specializations under the Bachelor of Fine Arts Course at the Gyanarthi Media College. The well-curated and structured curriculum enables students to refine their craft by employing better techniques. This is one of the best courses in the city of Kashipur and it not only hones the skills of the students but also helps them build careers in textiles, art studios, animation, production houses, and other such places of work. ",
            tabpanel2: "Integrating moulding, carving, welding, and modelling in Bachelor of Fine Arts, this specialization focuses on the holistic development of the students to grow their career in Sculpting. While the students are able to get an understanding of photography, fine arts, graphic designing, and other domains, this specialization helps them gain a closer understanding of the sculpting arena while repairing them more intricately for a career in the same field. ",
            tabpanel3: "The Applied Arts domain in the Bachelor of Fine Arts Courses is more inclined towards Calligraphy, Graphic Design, Advertising, Clay Modelling, and other such fields. This domain can be pursued by students who are interested in joining workspaces such as Animation Studios, Production Houses, Music Companies, Theatres and others. We prepare our students to work in exciting workspaces across the globe after they graduate from Gyanarthi. ",
            tabpanel4: "The Photography specialization in the Bachelor of Fine Arts Course brings forward opportunities for the students to explore visual aesthetics, photography frames, and relative specifications in the field.This course lays the foundation for students to pursue careers in cinematography, digital technologies, visual communication, and many more.We blend technology with talent to make our students compatible with modern trends in photography.",
            faqs: [
                {
                    question: 'What are the core subjects covered in the Bachelor of Fine Arts course?',
                    answer: 'The Bachelor of Fine Arts (BFA) course includes drawing, painting (oil, acrylic, watercolour), sculpture, printmaking, photography, graphic design, art history and theory, visual communication, digital media, animation, and portfolio development. These subjects train students with diverse artistic skills and knowledge, preparing them for careers in various creative fields and facilitating portfolio building for future endeavours.'
                },
                {
                    question: "What are the qualifications needed for enrolling Bachelor of Fine Arts course?",
                    answer: 'The qualifications needed to enrol in a Bachelor in fine arts courses vary depending on the institution and country. However, most programs require applicants to have completed 12th grade or its equivalent from a recognized educational board. Some institutions may have specific requirements related to artistic ability or a portfolio submission as part of the application process. '
                },
                {
                    question: 'What are the career opportunities after doing a Bachelor of Fine Arts course?',
                    answer: "Upon finishing a Bachelor of Fine Arts, graduates can pursue diverse careers as fine artists (painter, sculptor, printmaker), illustrators, graphic designers, art directors, photographers, multimedia artists, animators, art educators, gallery curators, art therapists, set or costume designers, creative directors, exhibition designers, or art critics."
                }
            ]
        },
        {
            name: "BA Animation and Design",
            description: "One of the rapidly growing fields in the market is Animation. The demand for 3D Animators is growing day by day and this is fueling the demand for courses in animation and multimedia. The importance of graphic and design courses is extensively explored at the Gyanarthi Media College. We understand that students seeking to build a career in the animation field are more inclined towards absorbing techniques. At Gyanarthi, our prime focus remains to deliver an understanding of the latest trends and technical assistance associated with the same. We believe in helping our students find their creativity in the right manner with limitless possibilities. Gyanarthi Media College aims to prepare students for the professional world where they can explore their creative sides while being intact with the traditional techniques and methods. For animation and design, there are rising trends and technical updates. We ensure that our students are prepped to take on any challenges in the most holistic way. ",
            specialization: "As far as the BA Animation and Design Course is concerned at the Gynarthi Media College, the criteria are highly relaxed. Since we welcome students of nearly all backgrounds, we ensure that we move up in the most basic way and establish concepts. We lay the foundation for animation and design for the students beginning with colour theory to modeling and motion designing. We concentrate on illustrating to our students the best industry techniques in 2D Hand-Drawn and 3D Modelling. Further, the prime software such as Adobe and Blender are explained to the students in a very thorough way. Techniques for visual storytelling, including scriptwriting and sequential art are well included in the course curriculum making the entire structure meticulously insightful. Further, the BA Animation and Design Course is one of the most pursued courses at the Gyanartjhi Media College. Our students proceed on to join bigger enterprises in the markets in order to kickstart their careers. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the relative domains of Animation. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Class 12th in the field of Animation and Design. The students can check all the details of the course of Animation and Design to get a comprehension of what it has to offer to the students.",

            tab1: "Fundamentals of Animation and Design  ",
            tab2: " Animation and Modelling ",
            tab3: "Cinematography and Photography Domains",
            tab4: "Media Planning and Management  ",
            tabpanel1: "For an BA in Animation and Design, since the eligibility conditions are highly relaxed, the students are taught everything from the basics. Gradually at Gyanarthi Media College, we build the foundation for the Animation and Design course by introducing the students to the fundamentals of art and design. Further, we take them through the specifications of a Story and Storyboard. This prepares the students for the course. ",
            tabpanel2: "At Gyanarthi, we focus on equipping students with Animation and Modelling in Dimensions that expand beyond limitations. Our students are proficient in 2D and 3D Animation and well adept in 3D Modelling and Texturing. These concepts are furthered into Character Rigging and Animation which help our students build the right skillset as required for jobs in Animation and Design ",
            tabpanel3: "Students at Gyanarthi are made to go through the basics of lighting and rendering in order to understand the specifications of Cinematography and Photography. The students of Animation and Design need visual proficiency to thoroughly comprehend Photography and Cinematography, and the students are ensured with concepts of Motion Graphics. Further, Editing and Composting also form a relevant core for the understanding of this domain. ",
            tabpanel4: "For the students of Animation and Design, it is necessary that they get an idea of the arena of Media Planning and Management. As Bachelor’s students, it is necessary to understand how they must operate within the management domains such that they can get into the management profiles in the media planning studies. This shall help them get equipped with the required acumen for Management profiles. ",
            faqs: [
                {
                    question: 'What is the scope for a B.A. in Animation & Design?',
                    answer: 'The scope for a B.A. in Animation & Design is a vast and growing course of animation and, graphic and design course graduates can find opportunities in various industries such as animation studios, film production companies, advertising agencies, gaming companies, television networks, and multimedia firms. They can work as animators, graphic designers, illustrators, storyboard artists, motion graphics designers, visual effects artists, and more.'
                },
                {
                    question: "What is the duration of the Animation and Design course?",
                    answer: 'The duration of the Animation and Design course ranges from three to four years, depending on the institution. Most programs follow a semester system, with each academic year divided into two semesters. Some institutions may offer accelerated or extended programs depending on their curriculum requirements.'
                },
                {
                    question: 'What is the syllabus for B.A. Animation and design course?',
                    answer: "The B.A. Animation and Design course covers courses in animation & multimedia basics, drawing, digital imaging, 2D and 3D animation principles, character development, storyboarding, motion graphics, multimedia production, game design, and industry software training. Additionally, students learn portfolio development and presentation skills. "
                }
            ]
        },
        {
            name: "MA Animation and Design",
            description: "Animation is the art of bringing life to a lifeless item using special effects is called animation. The Master in Animation and Design provides artistic and technical training to prepare the students for future artistic 3D character animation, traditional animation, storyboarding, computer game art, motion graphics, or visual effects animation. In the era of the Internet, the trend of animation and VFX in the entertainment industry is expected to persist, demanding expertise in new-age software. Gyanarthi Media College’s M.A. Animation and Design, a two-year program equips students with essential skills for success in this field. Gyanarthi Media College aims to help students understand the fascinating world of animation, VFX and motion graphics for film, broadcast and other media. Basic understanding of story and design concepts related to Pre-production for animation and VFX are taught. Special skill sets in the creation of Artwork for Production and Post-Production are also taught.The world of 3D Digital Art and VFX visualization are also introduced in our program to expose students to industry-relevant software. At the end of the programme, students are exposed to industrial training for real-world experience. essential aspects of art and design fundamentals, script development, and storyboard creation are also covered. Students get hands-on experience in both 2D and 3D animation techniques, mastering skills in 3D modelling, texturing, character rigging, and animation. Additionally, they learn about lighting, rendering, photography, and cinematography to enhance visual storytelling. ",
            specialization: "MA Animation and Design program students can specialize in various areas for their careers. Skills like Character Animation are making characters look real by using special animation skills, visual effects (VFX) for making cool effects for movies and TV shows, and motion graphics for creating moving graphics for titles and ads. 3D modelling and Texturing is another skill for making digital 3D models and game design and development shows how animation works for games. The wide-ranging scope for Animation and Design exists in production houses, gaming developers and many others. In addition to introducing students to the world of 3D digital art and VFX visualization, this programme exposes students to industry-relevant software. At the end of the programme, Students are exposed to industrial training to know about real-world experience. Renowned Industry experts often make an appearance at GMC to share their experiences about the use of 3D and 2D animation in film making and design. Different workshops are also organized periodically to keep students abreast of the ongoing developments in the animation industry. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Animation and Design. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Graduation in the field of Animation and Design. The students can check the Bachelor of Arts in Animation and Design Course subsequently to get a comprehension of the specifications of each specialization domain that the College has to offer to the students.",

            tab1: "Fundamentals of Animation and Design  ",
            tab2: "Animation and Modelling ",
            tab3: "Cinematography and Photography Domains",
            tab4: "Media Planning and Management  ",
            tabpanel1: "For an MA in Animation and Design, since the eligibility conditions are highly relaxed, the students are taught everything from the basics. Gradually at Gyanarthi Media College, we build the foundation for the Animation and Design course by introducing the students to the fundamentals of art and design. Further, we take them through the specifications of a Story and Storyboard. This prepares the students for the course. ",
            tabpanel2: "At Gyanarthi, we focus on equipping students with Animation and Modelling in Dimensions that expand beyond limitations. Our students are proficient in 2D and 3D Animation and well adept in 3D Modelling and Texturing. These concepts are furthered into Character Rigging and Animation which help our students build the right skillset as required for jobs in Animation and Design.",
            tabpanel3: "Students at Gyanarthi are made to go through the basics of lighting and rendering in order to understand the specifications of Cinematography and Photography. The students of Animation and Design need visual proficiency to thoroughly comprehend Photography and Cinematography, and the students are ensured with concepts of Motion Graphics. Further, Editing and Composting also form a relevant core for the understanding of this domain.",
            tabpanel4: "For the students of Animation and Design, it is necessary that they get an idea of the arena of Media Planning and Management. As Master’s students, it is necessary to understand how they must operate within the management domains such that they can get into the management profiles in the media planning studies. This shall help them get equipped with the required acumen for Management profiles. ",
            faqs: [
                {
                    question: 'What is an MA in animation?',
                    answer: 'A master’s degree in animation is a graduate-level academic program that focuses on advanced study and practice in the field of animation. It covers a wide range of topics like animation techniques, theory, history, storytelling and digital designing. The program also aims to develop student’s skills and creativity by practising theoretical coursework and practical projects.'
                },
                {
                    question: "What is the eligibility for an M.A. in animation?",
                    answer: "Students must have a bachelor's degree in the same discipline with an overall score of 45% to 50%.The undergraduate degree should be from a well- recognized university."
                },
                {
                    question: "What is the duration of a master's degree in animation and design?",
                    answer: "The duration of a master’s degree in this domain can range from one to two years, varying from institution to institution. Students engage in studying animation techniques, theory, and practical application. "
                }
            ]
        }
        ,
        {
            name: "MA Journalism and Mass Communication",
            description: "A Journalism and Mass Communication course is a graduate programme that focuses on developing skills and knowledge in the field of media and communication. Students pursuing this program get to learn about different aspects of journalism including news reporting, writing, editing etc. The Master's Degree in Journalism and Mass Communication program at Gyanarthi Media College aims to transform students into highly skilled professionals in media and communication. The program makes the students eligible and well-deserved to get a strong career in the media industry and media research. The duration of this MA Journalism and Mass Communication Course is two years.Gyanarthi Media College allows students to choose from specializations in their third semester. Specialization in the three main areas of Broadcast Media, Print & Online Media and Advertising & PR, a perfect blend of theoretical knowledge & practical exposure, classroom learning, and field visits for media communication skills are being provided. Assignments to prepare portfolios, short films, documentaries, radio programmes and research projects are being assigned. For hands-on experience, regular industrial interactions and news channel visits are planned for students.The program teaches advanced television journalism, production & broadcasting,	advanced radio broadcasting, print journalism, digital media, data journalism, photography, media research, media laws & ethics, media planning & management, advertising, PR & Corporate communication, development communication and contemporary & International Affairs. ",
            specialization: "A lot of career opportunities for aspirants are available after the MA Journalism and Mass Communication Course. Wide range of areas such as print journalism, digital journalism, public relations, advertising, media management, and international journalism including broadcast journalism, and feature writing. Broadcast journalism is for reporting and presenting news on television while Print journalism is for those passionate about crafting compelling stories for newspapers or magazines. The specialization provides students with expertise and experience, preparing students for diverse roles in the media and communication roles. The Master’s Degree programme in Journalism and Mass communication aims to transform students into highly skilled media and communication professionals. The programme is carefully structured to offer the students a foundation for a strong career in the media industry as well as media research. After successfully completing their MA-J&MC, the students will be ready to grab job opportunities as Radio Jockeys, Anchors, TV Broadcasters, Reporters, Copy Editors, Creative/Script Writers, Advertising Executives and PR/Corporate Communication Professionals. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Journalism and Mass Communication. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Graduation in the field of Animation and Design. The students can check the Bachelor of Arts in Journalism and Mass Communication Course subsequently to get a comprehension of the specifications of each specialization domain that the College has to offer to the students.",

            tab1: "Television Journalism  ",
            tab2: "Radio Broadcasting ",
            tab3: "Advertising ",
            tab4: " PR and Corporate Communication ",
            tabpanel1: "The students at Gyanarthi aim to be Journalists at established firms and companies in the Television Industry. Thus, in order to provide them with the right amount of knowledge in the arena of Data Journalism, Photography, Media Research, Media Laws and Ethics, Media Planning and Management, Advertising, and other sectors. This prepares students with the appropriate information to move forward in their careers.",
            tabpanel2: "For the students of Journalism and Mass Communication, Gyanarthi Media College ensures that the students are prepared for the Radio domains as it forms a very necessary core for Journalism studies. Furthermore, as students who are studying mass communication, it is necessary that they understand the levels of communication and the application of tools in this sector. Gyanarthi prepares students for everything and Radio Broadcasting is one of them.",
            tabpanel3: "It is necessary to understand for the students that the basics of advertising form a very important part of the journalism curriculum. Students at Gyanarthi are prepared for the journalism world while keeping them intact with the importance of Advertising. Starting from the basics to the core, the faculty at Gyanarthi ensures that the students know everything.",
            tabpanel4: "The curriculum of Journalism and Mass Communication Courses at the Gyanarthi Media College is very balanced. It is intricately designed to keep up with the latest market requirements, and Public Relations is one of them. The students are prepared well to navigate through Corporate Communication and Public Relations roles while they study MA Journalism and Mass Communication. ",
            faqs: [
                {
                    question: 'What subjects are included in the MA degree in Mass Communication and Journalism?',
                    answer: 'M.A. Journalism and Mass Communication is a 2-year course for postgraduates. Students get to encounter various subject knowledge like media theory and research, journalism ethics and laws, news reporting and multimedia storytelling, public relations etc. Students get to evolve and grasp knowledge of various career opportunities evolving media landscape.'
                },
                {
                    question: "What is the eligibility for enrolling in masters in journalism and mass communication course?",
                    answer: "All students who have completed their bachelor's degree from a recognized university with at least 50% to 60% aggregate marks can enrol for a master's in this domain. Candidate should not be more than 30-35 years of age at the time of admission."
                },
                {
                    question: "What is the scope of the M.A. in Journalism and Mass Communication?",
                    answer: "The wide-ranging and diverse course provides careers in various sectors such as print and digital journalism, broadcasting, public relations, advertising, corporate communications, digital media production, media management, and research. They may work as journalists, reporters, editors, news anchors, media analysts, public relations specialists, social media managers, content creators, or communication strategists in industries including news media, entertainment etc.  "
                }
            ]
        },
        {
            name: "MSc Fashion Designing",
            description: "Master of Science MSc in Fashion Design is the postgraduate course after completing bachelors. Fashion Design is the art of creating clothes and accessories that reflect cultural influences, individual expression, and the latest trends. This course focuses on the design, development, and production of clothes, footwear and accessories. Gyanarthi Media College in Kashipur offers Fashion and design courses in bachelors as well as postgraduate courses. The MSc Fashion Designing course of two years at Gyanarthi Media College provides a basic understanding of the fashion industry, various fashion segments like women, kids and men etc.Additionally, the course provides the basics of the fashion industry like working on different machines like sewing machines and overlock machines. The MSc program also teaches you basic pattern-making, textile art and draping techniques. The college has state-of-the-art infrastructure and equipment, such as pattern-making labs, drafting labs, draping labs and industrial sewing machines for a better experience in the industry.The key benefits of pursuing an MSc in Fashion design are that it provides an opportunity to specialize in a particular area of field and work with some of the best professionals in the fashion industry. Gyanarthi College also provides student workshops like Chitkala Workshops, and Kashmir Embroidery Workshops to get first-hand experience of the latest trends in the fashion industry.  ",
            specialization: "In an MSC Fashion Designing Course, students have the opportunity to choose from a variety of specializations depending on their interests. The specializations include fashion technology, textile design, accessory design, fashion marketing and merchandizing, and fashion technology. These specializations help students to focus on specific domains of the fashion world. They learn how to make clothes, design fabrics, sell fashion products or use technology in fashion.By studying these specializations, students get the expertise of their field and work with professionals in the outside world. Doing an MSc in Fashion Designing provides students with adequate abilities and skills for the course and improves their abilities and methods to construct a portfolio. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into professionals. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            edge: "The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Fashion. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Graduation in the field of Fashion Design. The students can check the Bachelor of Science in Fashion Designing Course subsequently to get a comprehension of the specifications of each specialization domain that the College has to offer to the students.",

            tab1: "Pattern-Making Labs ",
            tab2: "Pattern Drafting Labs ",
            tab3: "Interior Drafting Labs",
            tab4: "Draping Labs ",
            tabpanel1: "At Gyanarthi, we have specific pattern-making labs which help students develop a specific understanding of the fashion industry and its pertinence with pattern-making. The students equip themselves with the understanding of the blueprinting of patterns. Further, they are able to nurture their comprehension of factors such as the type of fabric, intended silhouette, and many other things that they require to build a successful career in fashion.  ",
            tabpanel2: "Equipped with top equipment for Pattern drafting, the Pattern Drafting Lab at Gyanarthi is focused on giving the students the right environment to carefully frame the basis of their fashion design journey. Pattern drafting is a very meticulous process as it inculcates an understanding of personalities, forms, models, and other specifications in order to draft the right pattern. ",
            tabpanel3: "To compose the 2D model of the designs that the students are willing to draft, it is necessary that they are able to get spaces such as Interior Drafting Labs. They help the students clearly understand the way they have to employ the types of equipment and how they must use the tools in order to complete the respective jobs. The students are further encouraged to take up the latest trends and get an understanding of the latest trends and market requirements. ",
            tabpanel4: "Draping forms the core of fashion design studies. Thus it is necessary that the students have the exact understanding of every technique. This is a very tedious job for which absolute concentration is much needed. The students must be able to work with the exact equipment in the needed direction to go through the steps of the intricate draping process.",
            faqs: [
                {
                    question: 'What is a masters degree in fashion design?',
                    answer: 'A masters degree in fashion design is an M.Sc. Fashion Designing Course is a two-year degree program that aims to professionalize students towards the fashion industry. It engages students with lectures and workshops by industry experts, field visits and first-hand projects.'
                },
                {
                    question: "What is the scope in M.Sc. Fashion Designing Course?",
                    answer: "Fashion Design graduates are qualified to take up many jobs in the fashion industry and related fields. Graduates can pursue careers as fashion designers, apparel or textile technologists, fashion merchandisers, stylists, trend analysts, fashion journalists, costume designers, or visual merchandisers. there are opportunities in areas such as sustainable fashion design, textile innovation, fashion entrepreneurship, and digital fashion marketing."
                },
                {
                    question: "Who is eligible to enrol in a masters degree in fashion design?",
                    answer: "Students willing to enrol in the masters degree in fashion design should have an aggregate of 50% marks in their graduation from a reputed college. Candidate must have cleared the cut-off marks for the applied university. It can vary from institution to institution"
                }
            ]
        }



    ]
    // Add more properties as needed



    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const programName = urlParams.get('program');
        const se = courses.find(course => course.name === programName);
        setSelectedCourse(se);
    }, []);

    if (!selectedCourse) {
        return <div>Loading...</div>;
    }





    return (
        <>
            <main>
                <Header />
                <div className='flex justify-center'>
                    <div className="flex flex-wrap py-8  container">
                        <div className="w-full md:w-1/2  p-4">
                            <h2 className="text-xl font-bold chancelorheading">{selectedCourse.name}</h2>
                            <p className="mt-2 chancelorparagraph pt-3">
                                Session Starts – August 2024<br></br><br></br>
                                Duration – 3 Years(For UG Program),<br></br>
                                2 Years (For PG Program)<br></br><br></br>
                                Residential Degree Program<br></br><br></br>
                                Applications Deadline: July 2024                            </p>
                            <div className='flex pt-8'>
                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4">

                            <Image src={admisiions} alt="Image Description"
                                className="max-w-full h-auto" />
                            <div className="w-full inset-0 flex items-center justify-center ">
                                <h1 className="  tpip">
                                    Ace Your Career, Gyanarthi Way!
                                </h1>
                            </div>

                        </div>

                    </div></div>

                <div className='flex justify-center'>
                    <div className='container'>
                        <Tabs className="ctabs">
                            <div>
                                <TabList className="courselist">
                                    <Tab className="ctab">Overview</Tab>
                                    <Tab className="ctab">Specializations</Tab>
                                    <Tab className="ctab">Eligibilty</Tab>

                                </TabList>
                            </div>
                            <div className='flex flex-col '>
                                <TabPanel className="tabpanel futurevision ">
                                    <div className="flex flex-wrap">
                                        {/* First column for text */}
                                        <div className="w-full md:w-1/2 p-4">
                                            <p className='selectedcourse'>{selectedCourse.description}</p>
                                            <div className="pt-5">
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                                            </div>
                                        </div>
                                        {/* Second column for image */}
                                        <div className="w-full md:w-1/2 p-4">
                                            {/* Assuming selectedCourse.image contains the image path or URL */}
                                            <Image src={selectedCourse.image} alt="Image" className="max-w-full h-auto" />
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabpanel futurevision">
                                    <div className="flex flex-wrap">
                                        {/* First column for text */}
                                        <div className="w-full md:w-1/2 p-4">
                                            <p className='selectedcourse'>{selectedCourse.specialization}</p>
                                            <div className="pt-5">
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                                            </div>
                                        </div>
                                        {/* Second column for image */}
                                        <div className="w-full md:w-1/2 p-4">
                                            {/* Assuming selectedCourse.image contains the image path or URL */}
                                            <Image src={selectedCourse.image} alt="Image" className="max-w-full h-auto" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="tabpanel futurevision">
                                    <div className="flex flex-wrap">
                                        {/* First column for text */}
                                        <div className="w-full md:w-1/2 p-4">
                                            <p className='selectedcourse'>{selectedCourse.Eligibility}</p>
                                            <div className="pt-5">
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                                            </div>
                                        </div>
                                        {/* Second column for image */}
                                        <div className="w-full md:w-1/2 p-4">
                                            {/* Assuming selectedCourse.image contains the image path or URL */}
                                            <Image src={selectedCourse.image} alt="Image" className="max-w-full h-auto" />
                                        </div>
                                    </div>
                                </TabPanel>


                            </div>
                        </Tabs >
                    </div ></div>
                <div className='flex justify-center'>
                    <div className="flex flex-wrap py-8  container">
                        <div className='py-8 px-6 md:px-12 sm:px-24 '>
                            <h2 className="text-2xl font-bold mb-4">Gyanarthi Gives You an Edge</h2>
                            <p className="edgepara text-justify">
                                {selectedCourse.edge}</p>
                            <Tabs className="cctabs pt-16">
                                <TabList className="etablist pb-5">
                                    <Tab className=" etab ">{selectedCourse.tab1}</Tab>
                                    <Tab className="etab ">{selectedCourse.tab2}</Tab>
                                    <Tab className="etab ">{selectedCourse.tab3}</Tab>
                                    <Tab className="etab ">{selectedCourse.tab4}</Tab>



                                </TabList>
                                <div>

                                    <TabPanel className="tabpanel">


                                        <p className='kalakari'>{selectedCourse.tabpanel1} </p>
                                    </TabPanel>
                                    <TabPanel className="tabpanel">

                                        <p className='kalakari'>{selectedCourse.tabpanel2} </p>


                                    </TabPanel>
                                    <TabPanel className="tabpanel">


                                        <p className='kalakari'>{selectedCourse.tabpanel3} </p>


                                    </TabPanel>
                                    <TabPanel className="tabpanel">


                                        <p className='kalakari'>{selectedCourse.tabpanel4} </p>


                                    </TabPanel>


                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <Homegallery />
                <div className='flex justify-center'>
                    <div className='container flex justify-center '>
                        <FAQSection faqs={selectedCourse.faqs} />
                    </div></div>
                <section className=" py-12">
                    <div className="container mx-auto px-2 md:px-2 sm:px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">Start Your Gyanarthi Journey</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className=" text-center mb-4 text-white journeyheading">Apply</h3>
                                    <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi Media College for the year 2024!</p>
                                    <button className="bg-transparent  hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a className='flex  items-center gap-3' href='/contact'>Apply Now <Image src={apply} alt="Image Description"
                                        className="add" /></a></button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className=" text-center mb-4 text-white journeyheading">Connect</h3>
                                    <p className="text-center mb-6 text-white journeypara">Reach Out to Gyanarthi’s Admission Team to secure your place at the College for the upcoming session.</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a className='flex  items-center gap-3' href="https://wa.me/8755552552" target="_blank" >Connect Now <Image src={wp} alt="Image Description"
                                        className="add" /></a></button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className="text-center mb-4 text-white journeyheading">Brochure</h3>
                                    <p className="text-center mb-6 text-white journeypara">Download the 2024 Brochure of the Gyanarthi Media College and explore the Courses and College Life.</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a href='https://glassfrogtech.com/broucher.pdf' download target="_blank" className='flex items-center gap-3'>
                                        Download Now
                                        <Image src={download} alt="Image Description" className="add" />
                                    </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default Page;

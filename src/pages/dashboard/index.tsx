import styles from "./dashboard.module.css";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import UrlCard from "@/components/urlCard/urlCard";

const Dashboard: React.FC = () => {

    const urlsData = [
        {
            uuid: '550e8400-e29b-41d4-a716-446655440000',
            url: 'https://example.com/page1-and-some-more-staff-here/',
            alias: 'abc123',
        },
        {
            uuid: '550e8400-e29b-41d4-a716-446655440001',
            url: 'https://example.com/page2',
            alias: 'def456',
        },
        {
            uuid: '550e8400-e29b-41d4-a716-446655440002',
            url: 'https://example.com/page3',
            alias: 'ghi789',
        },
        {
            uuid: '550e8400-e29b-41d4-a716-446655440003',
            url: 'https://example.com/page4',
            alias: 'jkl012',
        },
        {
            uuid: '550e8400-e29b-41d4-a716-446655440004',
            url: 'https://example.com/page5',
            alias: 'mno345',
        },
    ];

    const renderUrls = () => {
        const urls = [];

        for (let i = 0; i < urlsData.length; i++) {
            urls.push(
                <div className={styles.card}>
                    <UrlCard Url={urlsData[i]} />
                </div>
            );
        }

        return urls;
    }

    return (
        <>
            <Navbar />

            <div className={styles.body}>
                <div className={styles.container}>
                    {renderUrls()}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
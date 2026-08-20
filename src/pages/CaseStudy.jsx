import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { caseStudies } from '../data/caseStudies';

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies[slug];

  if (!study) {
    return (
      <PageContainer>
        <NotFound>
          <h1>Case Study Not Found</h1>
          <p>We couldn't find the project you're looking for.</p>
          <BackLink to="/work">← Back to Works</BackLink>
        </NotFound>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackButton to="/work">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Works
      </BackButton>

      <Header>
        <Title>{study.title}</Title>
        <MetaInfo>
          <MetaItem><strong>Context:</strong> {study.context}</MetaItem>
          <MetaItem><strong>Role:</strong> {study.role}</MetaItem>
          <MetaItem><strong>Focus:</strong> {study.focus}</MetaItem>
        </MetaInfo>
      </Header>

      <ContentSection>
        <SectionTitle>Project Overview</SectionTitle>
        <Paragraph>{study.overview}</Paragraph>
      </ContentSection>

      <ContentSection>
        <SectionTitle>The Problem Statement</SectionTitle>
        <Paragraph>{study.problem}</Paragraph>
      </ContentSection>

      <ContentSection>
        <SectionTitle>My Approach & Process</SectionTitle>
        <List>
          {study.approach.map((item, i) => {
            const [boldPart, rest] = item.split(': ');
            return (
              <ListItem key={i}>
                <strong>{boldPart}:</strong> {rest}
              </ListItem>
            );
          })}
        </List>
      </ContentSection>

      <ContentSection>
        <SectionTitle>The Solution</SectionTitle>
        <Paragraph>{study.solution}</Paragraph>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Results & Takeaways</SectionTitle>
        <Paragraph>{study.results}</Paragraph>
      </ContentSection>

    </PageContainer>
  );
};

// STYLES
const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 24px 120px;
  min-height: 100vh;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body, sans-serif);
  color: #64748b;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 3rem;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #0f172a;
    transform: translateX(-4px);
  }
`;

const Header = styled.header`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-family: var(--font-heading, sans-serif);
  font-size: 3rem;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
`;

const MetaItem = styled.div`
  font-family: var(--font-body, sans-serif);
  color: #475569;
  font-size: 1rem;
  
  strong {
    color: #0f172a;
    margin-right: 0.5rem;
  }
`;

const ContentSection = styled.section`
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading, sans-serif);
  font-size: 2rem;
  color: #0f172a;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f1f5f9;
`;

const Paragraph = styled.p`
  font-family: var(--font-body, sans-serif);
  font-size: 1.125rem;
  color: #334155;
  line-height: 1.8;
`;

const List = styled.ul`
  font-family: var(--font-body, sans-serif);
  font-size: 1.125rem;
  color: #334155;
  line-height: 1.8;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;

  strong {
    color: #0f172a;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 0;
  
  h1 {
    font-family: var(--font-heading, sans-serif);
    font-size: 2.5rem;
    color: #0f172a;
    margin-bottom: 1rem;
  }
  
  p {
    font-family: var(--font-body, sans-serif);
    color: #64748b;
    margin-bottom: 2rem;
  }
`;

const BackLink = styled(Link)`
  font-family: var(--font-body, sans-serif);
  color: #0f172a;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default CaseStudy;

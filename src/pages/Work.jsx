import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Work = () => {
  const projects = [
    {
      title: "MajorPath",
      badges: ["Bachelor's Thesis", "UX Research"],
      desc: "Platform pendukung keputusan dengan skor SUS 72 melalui riset end-to-end.",
      link: "/work/majorpath"
    },
    {
      title: "Dashboard TIF",
      badges: ["Internship", "UI/UX Design"],
      desc: "Perancangan sistem administrasi akademik yang kompleks bersama tim.",
      link: "/work/dashboard-tif"
    },
    {
      title: "Website HIMATIF",
      badges: ["Organization", "Front-End"],
      desc: "Perancangan visual modern dan implementasi kode front-end.",
      link: "/work/website-himatif"
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <Title>Selected Works</Title>
        <Subtitle>A collection of my recent projects and case studies.</Subtitle>
      </PageHeader>
      
      <ProjectsGrid>
        {projects.map((item, index) => (
          <ProjectCard key={index}>
            <ImagePlaceholder />
            <CardContent>
              <BadgesWrapper>
                {item.badges.map((badge, i) => (
                  <Badge key={i}>{badge}</Badge>
                ))}
              </BadgesWrapper>
              
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectDesc>{item.desc}</ProjectDesc>
              
              <ProjectLink to={item.link}>
                Read Case Study
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </ProjectLink>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
}

// STYLES
const PageContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 24px;
  min-height: 100vh;
`;

const PageHeader = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-family: var(--font-heading, sans-serif);
  font-size: 3.5rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.p`
  font-family: var(--font-body, sans-serif);
  font-size: 1.125rem;
  color: #64748b;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.article`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px -8px rgba(15, 23, 42, 0.1);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f1f5f9;
`;

const CardContent = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BadgesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const Badge = styled.span`
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-family: var(--font-body, sans-serif);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProjectTitle = styled.h3`
  font-family: var(--font-heading, sans-serif);
  font-size: 1.75rem;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.2;
`;

const ProjectDesc = styled.p`
  font-family: var(--font-body, sans-serif);
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`;

const ProjectLink = styled(Link)`
  font-family: var(--font-body, sans-serif);
  color: #0f172a;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export default Work;

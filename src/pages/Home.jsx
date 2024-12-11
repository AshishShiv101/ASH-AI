import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';
import { CircularProgress } from '@mui/material';
import { GetPosts } from '../api';

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  const [search, setSearch] = useState('');                        
  const [posts, setPosts] = useState([]);
  const [ loading,setLoading] = useState(false);
  const [ error, setError] = useState(false);
  const [filterPosts, setFilterPosts] = useState([]);
 
  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await GetPosts();
      const fetchedPosts = res?.data?.data || [];
      setPosts(fetchedPosts);
      setFilterPosts(fetchedPosts);
    } catch (error) {
      setError(error?.response?.data?.error?.message || error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if(!search){
      setFilterPosts(posts)
    }
    const SearchFilteredPosts = posts.filter((post) =>{
      const promptMatch = post?.prompt?.toLowerCase().includes(search.toString().toLowerCase());
      const authorMatch = post?.name?.toLowerCase().includes(search.toString().toLowerCase());
      return promptMatch || authorMatch 
    });
    if(search){
      setFilterPosts(SearchFilteredPosts)
    }
  }, [posts, search]);


  return (
    <Container>
      <HeadLine>Explore popular posts in the community!</HeadLine>
      <Span>Generated with AI</Span>
      <SearchBar search={search} setSearch={setSearch} />
      <Wrapper>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
            {filterPosts?.length === 0 ? (
              <>No posts Found</>
            ) : (
              <>
                {filterPosts?.slice().reverse().map((item, index) => (
                  <ImageCard key={index} item={item} />
                ))}
              </>
            )}
          </CardWrapper>
        )}
      </Wrapper>

    </Container>
  );
};

export default Home;

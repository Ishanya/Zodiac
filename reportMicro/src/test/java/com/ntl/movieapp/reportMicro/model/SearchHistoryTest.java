package com.ntl.movieapp.reportMicro.model;

import static org.junit.Assert.*;

import java.sql.Timestamp;

import org.junit.Test;

public class SearchHistoryTest {

	SearchHistory histon=new SearchHistory();
	SearchHistory histno=new SearchHistory(1,"Ti1234",2);
	SearchHistory hist=new SearchHistory(1,"Ti1234",2, new Timestamp(System.currentTimeMillis()));
	
	@Test
	public void testGetSearchId() {
		assertEquals(1,hist.getSearchId());
	}

	@Test
	public void testSetSearchId() {
		hist.setSearchId(2);
		assertEquals(2,hist.getSearchId());
	}

	@Test
	public void testGetUserId() {
		assertEquals("Ti1234",hist.getUserId());
	}

	@Test
	public void testSetUserId() {
		hist.setUserId("Ti2345");
		assertEquals("Ti2345",hist.getUserId());
	}

	@Test
	public void testGetMovieId() {
		assertEquals(2,hist.getMovieId());
	}

	@Test
	public void testSetMovieId() {
		hist.setMovieId(3);
		assertEquals(3,hist.getMovieId());
	}

	@Test
	public void testGetSearchTime() {
		
		assertEquals(new Timestamp(System.currentTimeMillis()),hist.getSearchTime());
	}

	@Test
	public void testSetSearchTime() {
		hist.setSearchTime(new Timestamp(System.currentTimeMillis()));
		assertEquals(new Timestamp(System.currentTimeMillis()),hist.getSearchTime());
	}

}

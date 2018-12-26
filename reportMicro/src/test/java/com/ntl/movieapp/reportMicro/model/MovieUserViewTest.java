package com.ntl.movieapp.reportMicro.model;

import static org.junit.Assert.*;

import org.junit.Test;

public class MovieUserViewTest {
	MovieUserView userno=new MovieUserView();
	MovieUserView user=new MovieUserView(1,"Ti1234");

	@Test
	public void testGetMovieId() {
		assertEquals(1,user.getMovieId());
	}

	@Test
	public void testSetMovieId() {
		user.setMovieId(3);
		assertEquals(3,user.getMovieId());
	}

	@Test
	public void testGetUserId() {
		assertEquals("Ti1234",user.getUserId());
	}

	@Test
	public void testSetUserId() {
		user.setUserId("ti123");
		assertEquals("ti123",user.getUserId());
	}

}

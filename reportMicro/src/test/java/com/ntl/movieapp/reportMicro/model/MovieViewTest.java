package com.ntl.movieapp.reportMicro.model;

import static org.junit.Assert.*;

import org.junit.Test;

public class MovieViewTest {
	
	MovieView move=new MovieView(1,2);
	MovieView moveno=new MovieView();
	
	@Test
	public void testGetMovieId() {
		assertEquals(1,move.getMovieId());
	}

	@Test
	public void testSetMovieId() {
		move.setMovieId(2);
		assertEquals(2,move.getMovieId());
	}

	@Test
	public void testGetMovieViews() {
	assertEquals(2,move.getMovieViews());
	}

	@Test
	public void testSetMovieViews() {
		move.setMovieViews(4);
		assertEquals(4,move.getMovieViews());
	}

}

package com.playlist.playlist.model;

import static org.junit.Assert.*;

import org.junit.Test;

import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.runner.RunWith;
import org.mockito.Mock;

@RunWith(MockitoJUnitRunner.class)
public class PlaylistItemsTest {

	PlaylistItems obj = new PlaylistItems(1,1,1);
	

	@Test
	public void testGetPlayListItemId() {
		assertEquals(1,obj.getPlayListItemId());
	}

	@Test
	public void testSetPlayListItemId() {
		obj.setPlayListItemId(1);
		assertEquals(1,obj.getPlayListItemId());
	}

	@Test
	public void testGetMovieId() {
		assertEquals(1,obj.getMovieId());
	}

	@Test
	public void testSetMovieId() {
		obj.setMovieId(1);
		assertEquals(1,obj.getMovieId());
	}

	@Test
	public void testGetPlayListId() {
		assertEquals(1,obj.getPlayListId());
	}

	@Test
	public void testSetPlayListId() {
		obj.setPlayListId(1);
		assertEquals(1,obj.getPlayListId());
	}

}

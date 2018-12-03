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
public class PlaylistTest {

	Playlist obj = new Playlist(1,"playlist","1");

	@Test
	public void testGetPlayListId() {
		assertEquals(1,obj.getPlayListId());
	}

	@Test
	public void testSetPlayListId() {
		obj.setPlayListId(1);
		assertEquals(1,obj.getPlayListId());
	}

	@Test
	public void testGetPlayListName() {
		assertEquals("playlist",obj.getPlayListName());
	}

	@Test
	public void testSetPlayListName() {
	   obj.setPlayListName("playlist");
	   assertEquals("playlist",obj.getPlayListName());
	}

	@Test
	public void testGetUserId() {
		assertEquals("1",obj.getUserId());
	}

	@Test
	public void testSetUserId() {
       obj.setUserId("1");
       assertEquals("1",obj.getUserId());
	}

}

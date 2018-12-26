package com.playlist.playlist.controller;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.playlist.playlist.model.Playlist;
import com.playlist.playlist.service.PlaylistService;

@RunWith(MockitoJUnitRunner.class)
public class PlaylistControllerTest {

	Playlist obj = new Playlist(1,"playlist","1");
	
	@Mock
	PlaylistService service;
	
	
	PlaylistController playlist = new PlaylistController();
	PlaylistController mockObj =new PlaylistController(service);

	@Test
	public void testMyPlayList() {
		List<Playlist> play = new ArrayList<Playlist>();
		play.add(new Playlist());
		play.add(new Playlist());
		play.add(new Playlist());
		String userId = "2";
		when(service.getMyPlayList(userId)).thenReturn(play);
		mockObj =new PlaylistController(service);
		play = mockObj.myPlayList(userId);
		assertEquals(3,play.size());
	}

	@Test
	public void testCreatePlayList() {
		when(service.createPlayList(obj)).thenReturn(obj);
		PlaylistController mockObj =new PlaylistController(service);
		obj=mockObj.createPlayList(obj);
		assertEquals("1",obj.getUserId());
	}

	@Test
	public void testDeletePlayList() {
		when(service.deletPlayList(obj.getPlayListId())).thenReturn(1);
		PlaylistController mockObj =new PlaylistController(service);
	    int result = mockObj.deletePlayList(obj.getPlayListId());
		assertEquals(1,result);
	}

}

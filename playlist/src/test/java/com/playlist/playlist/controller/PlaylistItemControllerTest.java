package com.playlist.playlist.controller;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.playlist.playlist.model.PlaylistItems;
import com.playlist.playlist.service.PlaylistItemService;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class PlaylistItemControllerTest {
	
	PlaylistItems obj = new PlaylistItems(1,1,1);
	@Mock
	PlaylistItemService service;
	
	
	PlaylistItemController playlistItem = new PlaylistItemController();
	PlaylistItemController mockObj =new PlaylistItemController(service);
	
	@Test
	public void testPlayListItems() {
		List<PlaylistItems> play = new ArrayList<PlaylistItems>();
		play.add(new PlaylistItems());
		play.add(new PlaylistItems());
		play.add(new PlaylistItems());
		int playListItemId = 1;
		when(service.getPlayListItems(playListItemId)).thenReturn(play);
		mockObj =new PlaylistItemController(service);
		play = mockObj.PlayListItems(playListItemId);
		assertEquals(3,play.size());
	}

	@Test
	public void testCreatePlayList() {
		when(service.createPlayListItem(obj)).thenReturn(obj);
		PlaylistItemController mockObj =new PlaylistItemController(service);
		mockObj =new PlaylistItemController(service);
		obj=mockObj.createPlayList(obj);
		assertEquals(1,obj.getPlayListItemId());
	}

	@Test
	public void testDeletePlayList() {
		when(service.deletPlayListItem(obj.getPlayListItemId())).thenReturn(1);
		PlaylistItemController mockObj =new PlaylistItemController(service);
		mockObj =new PlaylistItemController(service);
	    int result = mockObj.deletePlayList(obj.getPlayListItemId());
		assertEquals(1,result);
	}

}

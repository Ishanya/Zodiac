package com.playlist.playlist.service;

import static org.junit.Assert.*;

import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.doThrow;
import org.mockito.junit.MockitoJUnitRunner;

import com.playlist.playlist.dao.PlayListItemDao;
import com.playlist.playlist.model.PlaylistItems;

@RunWith(MockitoJUnitRunner.class)
public class PlaylistItemServiceTest {

	
	@Mock
	PlayListItemDao dao;
	
	PlaylistItemService obj = new PlaylistItemService();
	PlaylistItemService mockObj = new PlaylistItemService(dao);
	
	PlaylistItems playObj = new PlaylistItems(1,1,1);

	
	@Test 
	public void testCreatePlayListItem() {
		when(dao.save(playObj)).thenReturn(playObj);
		mockObj = new PlaylistItemService(dao);
		playObj = mockObj.createPlayListItem(playObj);
		assertEquals(1,playObj.getPlayListItemId());
	}
	
	@Test
	public void testGetPlayListItems() {
		List<PlaylistItems> play = new ArrayList<PlaylistItems>();
		play.add(new PlaylistItems());
		play.add(new PlaylistItems());
		play.add(new PlaylistItems());
		
		when(dao.findAllByPlayListId(playObj.getPlayListItemId())).thenReturn(play);
		mockObj = new PlaylistItemService(dao);
		play = mockObj.getPlayListItems(playObj.getPlayListItemId());
		assertEquals(3,play.size());
	}

	@Test
	public void testDeletPlayListItem() {
	      when(dao.deleteByPlayListItemId(playObj.getPlayListItemId())).thenReturn(1);
	      mockObj = new PlaylistItemService(dao);
	      int result = mockObj.deletPlayListItem(playObj.getPlayListItemId());
	  	  assertEquals(1,result); 
	}

}

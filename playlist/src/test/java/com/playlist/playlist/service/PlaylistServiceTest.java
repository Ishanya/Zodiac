package com.playlist.playlist.service;

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

import com.playlist.playlist.dao.PlayListDao;
import com.playlist.playlist.model.Playlist;

@RunWith(MockitoJUnitRunner.class)
public class PlaylistServiceTest {

	@Mock
	PlayListDao dao;
	
	PlaylistService obj = new PlaylistService();
	PlaylistService mockObj = new PlaylistService(dao);
	
	Playlist playObj = new Playlist(1,"playlist","1");
	
	@Test
	public void testCreatePlayList() {
		Mockito.lenient().when(dao.save(playObj)).thenReturn(playObj);
		mockObj = new PlaylistService(dao);
	    playObj = mockObj.createPlayList(playObj);
		assertEquals(1,playObj.getPlayListId());
	}

	@Test
	public void testGetMyPlayList() {
		List<Playlist> play = new ArrayList<Playlist>();
		play.add(new Playlist());
		play.add(new Playlist());
		play.add(new Playlist());
		String userId = "2";
		when(dao.findAllByUserId(userId)).thenReturn(play);
		mockObj = new PlaylistService(dao);
		play = mockObj.getMyPlayList(userId);
		assertEquals(3,play.size());
	}
	@Test
	public void testDeletPlayList() {
      when(dao.deleteByPlayListId(playObj.getPlayListId())).thenReturn(1);
      mockObj = new PlaylistService(dao);
      int result = mockObj.deletPlayList(playObj.getPlayListId());
  	  assertEquals(1,result);  
	}

}

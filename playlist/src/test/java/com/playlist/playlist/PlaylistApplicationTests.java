package com.playlist.playlist;

import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.playlist.playlist.controller.PlaylistController;
import com.playlist.playlist.controller.PlaylistControllerTest;
import com.playlist.playlist.controller.PlaylistItemController;
import com.playlist.playlist.controller.PlaylistItemControllerTest;
import com.playlist.playlist.model.PlaylistItemsTest;
import com.playlist.playlist.model.PlaylistTest;
import com.playlist.playlist.service.PlaylistItemServiceTest;
import com.playlist.playlist.service.PlaylistServiceTest;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.runners.Suite;


@RunWith(Suite.class)
@Suite.SuiteClasses({
   PlaylistControllerTest.class,
   PlaylistItemControllerTest.class,
   PlaylistTest.class,
   PlaylistItemsTest.class,
   PlaylistServiceTest.class,
   PlaylistItemServiceTest.class
})
public class PlaylistApplicationTests {

	 @Autowired
	 private PlaylistController controller1;
	 
	 @Autowired
	 private PlaylistItemController controller2;
	
	
	@Test
	public void contextLoads() {
		assertThat(controller1).isNotNull();
	}

}

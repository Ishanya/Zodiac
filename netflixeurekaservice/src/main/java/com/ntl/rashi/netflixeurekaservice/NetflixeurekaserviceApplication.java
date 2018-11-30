package com.ntl.rashi.netflixeurekaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;


@SpringBootApplication
@EnableEurekaServer
public class NetflixeurekaserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(NetflixeurekaserviceApplication.class, args);
	}
}

package com.frank.msaphase3.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.anyRequest().authenticated()
				.and()
				.csrf().disable()
				.oauth2Login();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("*"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.setAllowCredentials(true);
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
	/**
	 * Login at : localhost:8080
	 * If not logged it we get redirected to  http://localhost:8080/oauth2/authorization/github
	 *
	 * When sucessfully logged in we redirect to login/oauth2/code/github
	 * This contains the AUTH CODE in PARAMS
	 *
	 * TO USE OAUTH2 IN POSTMAN. Under the endpoint in the auth section
	 *
	 * Oauth2 -> Request Headers
	 * Grant type: Auth Code
	 * Callback URL: http://localhost:8080/login/oauth2/code/github
	 * AUth URL:  http://localhost:8080/
	 * Auth token URL:  http://localhost:8080/login/oauth2/code/github
	 *
	 * Client ID: d4058db8b865247e1230
	 * Client seceret: 8486091639d3ff9fb14ae9ee4825572f29108b80
	 */
}
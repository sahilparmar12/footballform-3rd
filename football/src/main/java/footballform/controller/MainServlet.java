package footballform.controller;
 
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

import javax.servlet.http.HttpServlet;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.apache.tomcat.util.json.JSONParser;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import footballform.dao.footballDAO;
import footballform.model.User;
@WebServlet("/add")
public class MainServlet extends HttpServlet 
{ 
	private static String inputStreamToString(InputStream inputStream) {
	      Scanner scanner = new Scanner(inputStream, "UTF-8");
	      return scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
	  }
	private static final long serialVersionUID = 1L;
	private footballDAO dao = new footballDAO();
			
		public void doPost (HttpServletRequest req , HttpServletResponse res) throws IOException, ServletException {
			System.out.println("in doPost for data insertion");		
			String body = inputStreamToString(req.getInputStream());
		      System.out.println("body: " + body);
		      GsonBuilder builder = new GsonBuilder(); 
		      builder.setPrettyPrinting();
		      Gson gson = builder.create(); 
		      User user = gson.fromJson(body, User.class); 
		      System.out.println(user);
		      System.out.println(user.getAddress());
		      try {
				if(dao.Testuser(user.getUname())) {
						JSONArray array = new JSONArray();
						JSONObject record = new JSONObject();
						record.put("value","true");
						array.add(record);
						res.setContentType("application/json");
						 //response.getWriter().write(array.toString());
						 ServletOutputStream out = res.getOutputStream();
						 //String response = gson.toJson(postRes);
						 out.write(array.toString().getBytes());
						 out.flush();
						 out.close();
					}else {
						
				  try {
						dao.submitData(user);
						JSONArray array = new JSONArray();
						JSONObject record = new JSONObject();
						record.put("value","false");
						array.add(record);
						res.setContentType("application/json");
						 //response.getWriter().write(array.toString());
						 ServletOutputStream out = res.getOutputStream();
						 //String response = gson.toJson(postRes);
						 out.write(array.toString().getBytes());
						 out.flush();
						 out.close();
						
					} catch (ClassNotFoundException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
			
			
		}

		 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		    	System.out.println("in retrival json servlet doget mainservlet");
				String username = request.getParameter("uname");
				System.out.println(username);
				try {
					User u = (User) dao.fetchData(username);
					
					if(u!= null) {
						
						JSONArray array = new JSONArray();
						JSONObject record = new JSONObject();
						record.put("value","true");
						record.put("uname",u.getUname());
						record.put("fname",u.getFname());
						record.put("lname",u.getLname());
						record.put("code",u.getCode());
						record.put("phone",u.getPhone());
						record.put("email",u.getEmail());
						record.put("age",u.getAge());
						record.put("team",u.getTeam());
						record.put("position",u.getPosition());
						record.put("address",u.getAddress());
						record.put("pin",u.getPin());
						record.put("country",u.getCountry());
						record.put("state",u.getState());
						record.put("city",u.getCity());
						array.add(record);
						 response.setContentType("application/json");
						 //response.getWriter().write(array.toString());
						 ServletOutputStream out = response.getOutputStream();
						 //String response = gson.toJson(postRes);
						 out.write(array.toString().getBytes());
						 out.flush();
						 out.close();
						 
						 System.out.println("done");
						 
					}
					else {
						JSONArray array = new JSONArray();
						JSONObject record = new JSONObject();
						record.put("value","false");
						array.add(record);
						response.setContentType("application/json");
						 //response.getWriter().write(array.toString());
						 ServletOutputStream out = response.getOutputStream();
						 //String response = gson.toJson(postRes);
						 out.write(array.toString().getBytes());
						 out.flush();
						 out.close();
						
					}
					
				} catch (ClassNotFoundException e) {
					e.printStackTrace();
				}
		        
				
		    }

		 @Override
			protected void doPut (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			// TODO Auto-generated method stub
			
				String body = inputStreamToString(request.getInputStream());
			      System.out.println("body: " + body);
			      GsonBuilder builder = new GsonBuilder(); 
			      builder.setPrettyPrinting();
			      Gson gson = builder.create(); 
			      User user = gson.fromJson(body, User.class); 
			     
			      try {
			    	  dao.UpdateData(user);
						response.sendRedirect("footballform.html");
					} catch (ClassNotFoundException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		}

}
		
		
		
		
		
		
		
	
	
	



package footballform.dao;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.*;

import footballform.model.*;
public class footballDAO {
	
	public void submitData(User user) throws ClassNotFoundException{
		try {
			String url ="jdbc:sqlserver://INDIA-GPNVGC2;databaseName=STUDENT";
			String usern="sa";
			String pass="sahil123";
			
			Connection con = DriverManager.getConnection(url,usern,pass);
			
			String q = "insert into footballform values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			
			PreparedStatement st = con.prepareStatement(q);
			st.setString(1, user.getUname());
			st.setString(2, user.getFname());
			st.setString(3, user.getLname());
			st.setString(4, user.getCode());
			st.setString(5, user.getPhone());
			st.setString(6, user.getEmail());
			st.setString(7, user.getAge());
			st.setString(8, user.getTeam());
			st.setString(9, user.getPosition());
			st.setString(10,user.getAddress());
			st.setString(11, user.getPin());
			st.setString(12, user.getCountry());
			st.setString(13, user.getState());
			st.setString(14, user.getCity());
			
			int r = st.executeUpdate();
			if(r>0) {
				System.out.println("row inserted");
			}
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}
	public User fetchData(String uname) throws ClassNotFoundException{
		User user=null;
		try {
			
			String url ="jdbc:sqlserver://INDIA-GPNVGC2;databaseName=STUDENT";
			String usern="sa";
			String pass="sahil123";
			
			Connection con = DriverManager.getConnection(url,usern,pass);
			
			String q = "select * from footballform where uname=?";
			
			PreparedStatement st = con.prepareStatement(q);
			st.setString(1,uname);
			ResultSet r = st.executeQuery();
			System.out.println("in fetchdata dao");
			
			
			if(r.next()) {
				System.out.println(r.getString("uname"));
				user = new User();
				String a = r.getString(1);
				
				user.setUname(r.getString("uname"));
				user.setFname(r.getString("fname"));
				user.setLname(r.getString("lname"));
				user.setCode(r.getString("code"));
				user.setPhone(r.getString("phone"));
				user.setEmail(r.getString("email"));
				user.setAge(r.getString("age"));
				user.setTeam(r.getString("team"));
				user.setPosition(r.getString("position"));
				user.setAddress(r.getString("address"));
				user.setPin(r.getString("pin"));
				user.setCountry(r.getString("country"));
				user.setState(r.getString("state"));
				user.setCity(r.getString("city"));
				
			}
			
			
		}
		catch(Exception e) {
			System.out.println(e);
		}
		
		return user;
		
		
	}
	public Boolean Testuser(String name) throws SQLException {
		
			
			String url ="jdbc:sqlserver://INDIA-GPNVGC2;databaseName=STUDENT";
			String usern="sa";
			String pass="sahil123";
			
			Connection con = DriverManager.getConnection(url,usern,pass);
			
			String q = "select * from footballform where uname=?";
			PreparedStatement st = con.prepareStatement(q);
			st.setString(1,name);
			ResultSet r = st.executeQuery();
		
		if(r.next()) {
			return true;
			
		}
		else {
			return false;
		}
	}
	
	public void UpdateData(User user) throws ClassNotFoundException{
		try {
			String url ="jdbc:sqlserver://INDIA-GPNVGC2;databaseName=STUDENT";
			String usern="sa";
			String pass="sahil123";
			
			Connection con = DriverManager.getConnection(url,usern,pass);
			
			String q = "update footballform set fname = ?,lname = ?,code = ?,phone = ?,email = ?,age = ?,team = ?"
					+",position=?,address=?,pin=?,country=?,state=?,city=? where uname=?";
			
			PreparedStatement st = con.prepareStatement(q);
			st.setString(14, user.getUname());
			st.setString(1, user.getFname());
			st.setString(2, user.getLname());
			st.setString(3, user.getCode());
			st.setString(4, user.getPhone());
			st.setString(5, user.getEmail());
			st.setString(6, user.getAge());
			st.setString(7, user.getTeam());
			st.setString(8, user.getPosition());
			st.setString(9,user.getAddress());
			st.setString(10, user.getPin());
			st.setString(11, user.getCountry());
			st.setString(12, user.getState());
			st.setString(13, user.getCity());
			
			int r = st.executeUpdate();
			if(r>0) {
				System.out.println("row updated");
			}
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}
}
	

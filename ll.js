class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
public class Linked{
    private static Node arr2l(int arr[]){
        int i;
        Node head=new Node(arr[0]);
        Node mover=head;
        
        for(i=1;i<arr.length;i++)
        {
            Node temp=new Node(arr[i]);
            mover.next=temp;
            mover=temp;
        }
        return head;
    }
    private static int  length(Node head){
        int cnt=0;
        Node temp=head;
         while(temp!=null){
         cnt++;
          temp=temp.next;
        }
        return cnt;
    }
    private static boolean find(Node head,int val){
        Node temp=head;
        while(temp!=null){
            if(temp.data==val){
                return true;
            }
            else{
                temp=temp.next;
            }
        }
        return false;
        
    }
    public static void main(String args[]){
        int arr[]={1,2,3,4,5,6,7,78,9};
        Node head=arr2l(arr);
        Node temp=head;
        int val=4;
        System.out.println(find(head,val));
        System.out.println(length(head));
       
     
    }
}
